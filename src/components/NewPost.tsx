import classes from "./NewPost.module.css";
import { useState } from "react";

//you could pass the props as an object or define each individual props surrounded by {}
// ex... props could be {onBodyChange} or {props.onBodyChange}
function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
