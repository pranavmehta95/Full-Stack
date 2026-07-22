
function App(){

  const posts = [{
    name: "Pranav",
    content: "hii there"
  },{
    name: "Parv",
    content: "Helo"
  },{
    name: "Pravin",
    content: "Hii guys..."
  }];

  return (
    <div>
      <h1>Linked!!!!</h1>
      {posts.map(p => <Post name={p.name} content={p.content} />)}
    </div>
  )
}

function Post(props){
  return <div style={{margin: 20, backgroundColor: "yellow", fontSize: 20, border: "2px solid black"}}>
  <div>
    <b>{props.name}</b>
  </div>
  <div>
    {props.content}
  </div>
  </div>
}
  

export default App

