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

export default Posts;
