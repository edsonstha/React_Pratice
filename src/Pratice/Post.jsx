import React, { useEffect, useState } from 'react';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const response= await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
    fetchData();
  }, []);
  return (
<div>
  {posts.map((post) => (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  ))}
</div>
  )
}
// export default Post;