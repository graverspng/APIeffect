import { useState, useEffect } from "react";

function Comment() {
    const [comment, setComment] = useState({});
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    async function getComment() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments/50");
    const data = await response.json()
    setComment(data); 
    setLoading(false);
  }
  
    getComment();
  },[]);
  
    return (
    <>  {loading ? <p>Loading...</p> :
        <>
        <p>Post ID: {comment.postId}</p>
        <p>ID: {comment.id}</p>
        <p>Name: {comment.name}</p>
        <p>Email: {comment.email}</p>
        <p>Body: {comment.body}</p>
        </>
}
    </>
    );
  }
  
  export default Comment;