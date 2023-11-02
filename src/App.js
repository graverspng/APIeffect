import { useEffect, useState } from "react";
import ToDo from './ToDo.js'
import Comment from './Comment.js'

function App() {

  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    async function getToDo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json()
    setToDo(data); 
    setLoading(false);
  }
  
    getToDo();
  },[]);
  


  return (
    <>
    {nowloading ? <p>Loading...</p> : <comment{...Comment} />}
    {Comment}
    </>
  );
}

export default App;
