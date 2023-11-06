import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    }

    getPosts();
  }, []);

 
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>User Id: {post.userId}</p>
              <p>ID: {post.id}</p>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PostList;
