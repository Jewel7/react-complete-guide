import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";

export function PostsLists() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Jewel" body="Hello, world!" />
        <Post author="Nick" body="Goodbye, world!" />
      </ul>
    </>
  );
}
