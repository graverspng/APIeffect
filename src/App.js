import { useEffect, useState } from "react";
import Comment from './Comment.js';
import ToDo from "./ToDo.js";
import Post from './Post.js';
import PostList from './PostList.js';

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
     {loading ? <p>Loading...</p> : <ToDo {...toDo} />}
     <Comment />
      <Post />
    </>
  );
}

export default App;
