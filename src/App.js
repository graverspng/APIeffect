import { useEffect, useState } from "react";
import ToDo from './ToDo.js'

function App() {

  const [toDo, setToDo] = useState({});
    
  useEffect(() => {
    async function getToDo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json()
    setToDo(data);
  }
  
    getToDo();
  },[]);
  


  return (
    <>
    <ToDo{...toDo} />
    </>
  );
}

export default App;
