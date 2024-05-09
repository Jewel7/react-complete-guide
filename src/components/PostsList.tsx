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
    setPosts((existingPosts) => {
      [postData, ...existingPosts];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author="Nick" body="Goodbye, world!" />
      </ul>
    </>
  );
}
