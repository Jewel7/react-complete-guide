import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost() {
  // stores a new value in memory but also rexecutes the function in which the state was registered
  // array destructuring
  // [current value, updater for currentvalue] = useState(initial value);
  const [enteredBody, setEnteredBody] = useState("");

  // we automatically get the event object as an argument to the event handler
  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  // calling () after the function name will execute the function, so just use the function name to pass it to the event listener
  // functions are first-class citizens in JavaScript, so you can pass them around like any other value
  // In functional programming languages, functions are also first-class citizens. This means you can do things
  // like assign a function to a variable, pass a function as an argument to another function,
  // or have a function return another function.

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
