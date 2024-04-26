import "./App.css";
import { PostsLists } from "./components/PostsList";

//App will be used in main.tsx
function App() {
  //use closing tag or self-closing tag
  return (
    <main>
      <PostsLists />
    </main>
  );
}

export default App;
