//import the css file this as an object. using the naming convention for css
//files as .modules.css also gives you unique class names
import styles from "./Post.module.css";

type PostProps = {
  author: string;
  body: string;
};

function Post(props: PostProps) {
  // function getRandomName() {
  //   const randomIndex = Math.floor(Math.random() * names.length);
  //   return names[randomIndex];
  // }

  return (
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.body}>{props.body}</p>
    </div>
  );
}

export default Post;
