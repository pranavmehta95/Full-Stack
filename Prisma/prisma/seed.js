import { PrismaClient } from "@prisma/client/extension";
const client = new PrismaClient();
async function createDummyUsers() {
    let user = await client.user.create({
        data: {
            username: "pranavkumar",
            age: 23,
            password: "pranav123",
            city: "delhi",
            todos: {
                create: {
                    descrioption: "go to gym",
                    title: "gym",
                    done: false
                }
            }
        }
    });
}
createDummyUsers();
//# sourceMappingURL=seed.js.map