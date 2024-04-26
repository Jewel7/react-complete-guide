import "./App.css";
import Post from "./components/Post";

//App will be used in main.tsx
function App() {
  //use closing tag or self-closing tag
  return (
    <main>
      <Post author="Jewel" body="is awesome" />
      <Post author="Nick" body="is very awesome" />
    </main>
  );
}

export default App;
