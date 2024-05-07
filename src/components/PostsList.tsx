import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

// ---- LIFTING STATE UP-----
//if you have state that's manipulated in component A, but needed in component B, you should
//lift the state up to a component that has access to both compoents that need the state
// for example, NewPost and Post need the same state, so we lift the state up to PostsList
// and pass the state and the event handlers to the child components

export function PostsLists({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredAuthor(event.target.value);
  }

  // ---ALTERNATIVE TO CONDITIONAL RENDERING BELOW---
  // APPROACH 1: you can store JSX code in variables as well.

  //   let modalContent;

  //   if (modalIsVisible) {
  //     modalContent = (
  //       <Modal onClose={hideModalHandler}>
  //         <NewPost
  //           onBodyChange={bodyChangeHandler}
  //           onAuthorChange={authorChangeHandler}
  //         />
  //       </Modal>
  //     );
  //   }

  // APPROACH 2: ternary expression
  // APPROACH 3: short-circuiting, where the second operand is not evaluated if the first operand is sufficient
  // to determine the result. If the modal is truthy, then the component is rendered

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Nick" body="Goodbye, world!" />
      </ul>
    </>
  );
}
