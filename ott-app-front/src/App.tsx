import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/page-elements/search-bar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
