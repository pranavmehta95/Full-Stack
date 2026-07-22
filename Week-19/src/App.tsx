import axios from "axios";
import { useState, useEffect } from "react";

function App() {
let [data, setData] = useState([]);
axios.get("https://jsonplaceholder.typicode.com/todos/")
  .then(response => {
    setData(response.data);
  })

  return <div>
    {data.map(todo => <Todo title={todo.title}/>)}
  </div>
}


function Todo(props){
  return <div style={{margin: 10, padding: 20, border: "1px solid black", borderRadius: 5, backgroundColor: "yellow"}}>
    <div>
      {props.title}
    </div>
  </div>
}



export default App
