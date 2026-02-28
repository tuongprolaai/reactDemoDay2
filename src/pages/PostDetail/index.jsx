// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

function PostDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
      console.log("Back");
    }, 5000);
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        if (!res.ok) {
          navigate("/news");
          return;
        }
        return res.json();
      })
      .then((posts) => {
        setPost(posts);
      });
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
}

export default PostDetail;

// 36 - 2:01:07
