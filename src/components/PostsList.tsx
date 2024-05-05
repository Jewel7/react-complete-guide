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

export function PostsLists() {
  // stores a new value in memory but also rexecutes the function in which the state was registered
  // array destructuring
  // [current value, updater for currentvalue] = useState(initial value);
  const [enteredBody, setEnteredBody] = useState("");

  const [enteredAuthor, setEnteredAuthor] = useState("");
  // we automatically get the event object as an argument to the event handler
  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredAuthor(event.target.value);
  }

  // calling () after the function name will execute the function, so just use the function name to pass it to the event listener
  // functions are first-class citizens in JavaScript, so you can pass them around like any other value
  // In functional programming languages, functions are also first-class citizens. This means you can do things
  // like assign a function to a variable, pass a function as an argument to another function,
  // or have a function return another function.

  // if you wrap content with another custom component, by default, React doesn't where to put the content.
  // you have to tell React where to put the content by using props.children
  // the wrapper (Modal) is given a child component (NewPost), but in the Modal wrapper, it has to define
  // WHERE to put the child component by using props.children
  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>

      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Nick" body="Goodbye, world!" />
      </ul>
    </>
  );
}
