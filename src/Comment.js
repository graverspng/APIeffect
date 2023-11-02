import { useState, useEffect } from "react";
import ToDo from './ToDo.js'

function Comment(props) {
    const [comment, setComment] = useState({});
    const [nowloading, nowsetLoading] = useState(true);
    
  useEffect(() => {
    async function getComment() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comment/1");
    const data = await response.json()
    setComment(data); 
    nowsetLoading(false);
  }
  
    getComment();
  },[]);
  
    return (
    <>  {nowloading ? <p>Loading...</p> :
        <>
        <p>Post ID: {props.postid}</p>
        <p>ID: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Body: {props.body}</p>
        </>
}
    </>
    );
  }
  
  export default ToDo;