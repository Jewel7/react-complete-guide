import "./App.css";
import { PostsLists } from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

//App will be used in main.tsx
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  //use closing tag or self-closing tag

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsLists
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
