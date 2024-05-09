import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

export function PostsLists({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author="Nick" body="Goodbye, world!" />
      </ul>
    </>
  );
}
