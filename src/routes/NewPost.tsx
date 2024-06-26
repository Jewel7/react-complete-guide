import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

//you could pass the props as an object or define each individual props surrounded by {}
// ex... props could be {onBodyChange} or {props.onBodyChange}
function NewPost({ onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event: React.FormEvent) {
    // prevent the default browser behavior of submitting the form, because we don't have a server to send the data to
    event.preventDefault();
    // collect author and body data
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          {/* buttons added to a form will submit the form, by default  */}
          {/* to ensure that the cancel button doesn't trigger a form submission, give it a type of button */}
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
