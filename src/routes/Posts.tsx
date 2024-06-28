import { PostsLists } from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsLists />
      </main>
    </>
  );
}
export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}

export default Posts;
