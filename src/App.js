import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Stories from "./Stories";
import Post from "./Post";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stories/>
      <Post/>
      <Post/>
    </div>
  );
}

export default App;
