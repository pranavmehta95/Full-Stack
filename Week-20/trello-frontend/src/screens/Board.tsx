import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { BoardsSection } from "../components/BoardsSection";
import { Card } from "../components/Card";

export function Board() {


    const [pendingTasks, setpendingTasks] = useState([]);
    const [onGoningTasks, setonGoingTasks] = useState([{id: "1", title: "Node to bun migration", description: "Initially we have learned the node but after that we shifted toward the bun that is cool but soo cool whatever idk!!!"}]);
    const [doneTasks, setdoneTasks] = useState([{id: "2", title: "Node to bun migration", description: "Initially we have learned the node but after that we shifted toward the bun that is cool but soo cool whatever idk!!!"}, {id: "3", title: "Node to bun migration", description: "Initially we have learned the node but after that we shifted toward the bun that is cool but soo cool whatever idk!!!"}]);

    return <div>
        <Appbar />
        <div style={{display: "flex", padding: 30}}>
            <BoardsSection onDrop={(item) => {
                console.log(item);
                setpendingTasks(p => p.filter(x => x.id != item.id))
                setonGoingTasks(p => p.filter(x => x.id != item.id))
                setdoneTasks(p => p.filter(x => x.id != item.id))
                setpendingTasks(p => [...p, item])
            }}>
                {pendingTasks.map(task => <Card
                    id = {task.id}
                    title={task.title}
                    description={task.description}
                 />)}
            </BoardsSection>
            <BoardsSection onDrop={(item) => {
                console.log(item);
                setpendingTasks(p => p.filter(x => x.id != item.id))
                setonGoingTasks(p => p.filter(x => x.id != item.id))
                setdoneTasks(p => p.filter(x => x.id != item.id))
                setonGoingTasks(p => [...p, item])
            }}>
                {onGoningTasks.map(task => <Card
                    id = {task.id}
                    title={task.title}
                    description={task.description}
                 />)}
            </BoardsSection>
            <BoardsSection onDrop={(item) => {
                console.log(item);
                setpendingTasks(p => p.filter(x => x.id != item.id))
                setonGoingTasks(p => p.filter(x => x.id != item.id))
                setdoneTasks(p => p.filter(x => x.id != item.id))
                setdoneTasks(p => [...p, item])
            }}>
                {doneTasks.map(task => <Card
                    id={task.id}
                    title={task.title}
                    description={task.description}
                 />)}
            </BoardsSection>
        </div>
    </div>
}