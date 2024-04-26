import Post from "./Post";
import styles from "./PostsList.module.css";

export function PostsLists() {
  return (
    <ul className={styles.posts}>
      <Post author="Jewel" body="Hello, world!" />
      <Post author="Nick" body="Goodbye, world!" />
    </ul>
  );
}
