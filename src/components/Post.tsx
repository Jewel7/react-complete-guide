//import the css file this as an object. using the naming convention for css
//files as .modules.css also gives you unique class names
import styles from "./Post.module.css";

export interface PostProps {
  author: string;
  body: string;
}

//you could pass the props as an object or define each individual props surrounded by {}
function Post({ author, body }: PostProps) {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.body}>{body}</p>
    </li>
  );
}

export default Post;
