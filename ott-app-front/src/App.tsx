import { useState } from "react";
import SearchBar from "./components/page-elements/search-bar";
import NavigationBar from "./components/page-elements/navigation-bar";

function App() {
  return (
    <div className="app-main bg-slate-950 h-screen w-screen flex justify-between ">
      <span>
        <NavigationBar />
      </span>
      <span className="app-item search w-1/2 ">
        <SearchBar />
      </span>
      <span>Filter</span>
    </div>
  );
}

export default App;
