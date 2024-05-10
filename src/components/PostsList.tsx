import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

/**
 * CALLBACK FUNCTIONS: In React, a callback function is a function that is passed as a prop to a child component and is invoked by the child component at some point.
 * This allows the child component to send data back to the parent component or to notify it about certain events.
 * it's how you can let parent components know about events happening in their child components. Callback
 * functions are also used for handling events, such as button clicks or form submissions.
 */
export function PostsLists({ isPosting, onStopPosting }) {
  // we manage a list of posts and that list should be edited whenever we submit a new post
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // if you update state and that new state depends on the previous state,
    // use the function form of the state update function
    // so don't do this  --> setPosts([postData, ...posts]);
    // instead, do this...you automatically get you the old state, so you can use that to return the new state
    // This ensures that React ensures that you get the latest correct state even if you have multiple pending state updates
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {/* if the posts array has at least one post, output the list of posts */}
      {/* short-circuiting:If the first operand is falsy, JavaScript stops evaluation and returns the first operand. 
      If the first operand is truthy, JavaScript evaluates the second operand and returns its value. */}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            // transform our array of post object into an array of JSX elements, one post element per post object
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {/* display this if there are no posts */}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2> There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
