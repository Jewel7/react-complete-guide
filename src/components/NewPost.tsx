import classes from "./NewPost.module.css";
import { useState } from "react";

//you could pass the props as an object or define each individual props surrounded by {}
// ex... props could be {onBodyChange} or {props.onBodyChange}
function NewPost({ onBodyChange, onAuthorChange, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.action}>
        {/* buttons added to a form will submit the form, by default  */}
        {/* to ensure that the cancel button doesn't trigger a form submission, give it a type of button */}
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
