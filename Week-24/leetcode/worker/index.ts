import { createClient } from "redis";
import fs from "fs";
import { file } from "bun";
import { spawn } from "child_process";
import { prisma } from "./db";
import type { resolve } from "dns";
import { exit, exitCode } from "process";

const client = createClient();
client.connect()
    .then(async () => {
        while(1){
            const response = await client.rPop("problem");
            if(!response){
                await new Promise((r) => setTimeout(r, 1000));
                continue;
            }

            const parsedResponse = JSON.parse(response);
            const code = parsedResponse.code;
            const language = parsedResponse.language;
            const submissionId = parsedResponse.submissionId;
            console.log("processing question for user" + parsedResponse.userId);
            let finalOutput = "";
            if(language === "cpp"){
                console.log("Running user c++ code");
                const filePath = __dirname + "/code/a.cpp";
                fs.writeFileSync(filePath, code);
                const responseCompiler = spawn("g++", [filePath, "-o", "./code/out"]);
                let exitCodeCompiler = null;
                await new Promise<void>(resolve => {
                    responseCompiler.on("exit", async(exitcode) => {
                        exitCodeCompiler = exitCode;
                        if(exitcode!==0){
                            await prisma.submission.update({
                                where: {
                                    id: submissionId
                                },
                                data: {
                                        status: "Failure"
                                }
                            })
                        }
                        resolve()
                    })
                })
                if(exitCodeCompiler !== 0){
                    continue;
                }
                await new Promise((r) => setTimeout(r, 2000));
                const response = spawn("./code/out");
                response.stdout.on("data", (chunk) => {
                    finalOutput += chunk.toString();
                })
                
                await new Promise<void>((resolve, reject) => {
                        response.on("exit", async() => {
                        await prisma.submission.update({
                            where: {
                                id: submissionId
                            },
                            data: {
                                    status: "Success",
                                    Output: "finalOutput"
                            }
                        })
                        resolve()
                    })
                })
                
            }

            if(language === "js"){
                const filePath = __dirname + "/code/a.js";
                console.log("Running user js code")
                fs.writeFileSync(filePath, code);
                const response = spawn("node", [filePath]);
                response.stdout.on("data", (chunk) =>{
                    finalOutput += chunk.toString();
                })
                await new Promise<void>((resolve, reject) => {
                        response.on("exit", async() => {
                        await prisma.submission.update({
                            where: {
                                id: submissionId
                            },
                            data: {
                                    status: "Success",
                                    Output: "finalOutput"
                            }
                        })
                        resolve()
                    })
                })
                await new Promise((r) => setTimeout(r, 2000));
            }


            if(language === "py"){
                const filePath = __dirname + "/code/a.js";
                console.log("Running user js code")
                fs.writeFileSync(filePath, code);
                const response = spawn("python3", [filePath]);
                response.stdout.on("data", (chunk) =>{
                    finalOutput += chunk.toString();
                })
                await new Promise<void>((resolve, reject) => {
                        response.on("exit", async (exitCode) => {
                            console.log(exitCode);
                        if(exitCode === 0 ){
                                await prisma.submission.update({
                                where: {
                                    id: submissionId
                                },
                                data: {
                                        status: "Success",
                                        Output: "finalOutput"
                                }
                            })
                        } else{
                            await prisma.submission.update({
                                where: {
                                    id: submissionId
                                },
                                data: {
                                        status: "Failure"
                                }
                            })
                        }
                        
                        resolve()
                    })
                })
            }
        }
    });