import { useState, useEffect } from "react";

function PostList() {
    const [post, setPost] = useState({});
    const [isloading, setisLoading] = useState(true);
    
  useEffect(() => {
    async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()
    setPost(data); 
    setisLoading(false);
  }
  
    getPost();
  },[]);
  
    return (
    <>  {isloading ? <p>Loading...</p> :
        <>
        <p>User Id: {post.userId}</p>
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
        </>
}
    </>
    );
  }
  
  export default PostList;