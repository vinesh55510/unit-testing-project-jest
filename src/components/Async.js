import { useEffect, useState } from "react";

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }, []);

  const handleDelete = (title) => {
    const result = posts.filter((post) => post.title !== title);
    setPosts(result);
  };

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}{" "}
            <button onClick={() => handleDelete(post.title)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
