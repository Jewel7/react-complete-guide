import classes from "./NewPost.module.css";

function NewPost() {
  // we automatically get the event object as an argument to the event handler
  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log(event.target.value);
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
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
