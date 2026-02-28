import { useEffect, useState } from "react";
import { Link } from "react-router";

function News() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);
  return (
    <div>
      <h1>News page component</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/news/${post.id}`} replace>
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <h2>Pagination: </h2>
      <ul>{Array(10).fill(null).map((_, index)=>(
        <li key={index}>{index + 1}</li>
      ))}</ul>
    </div>
  );
}

export default News;

// 36: 3:13:02