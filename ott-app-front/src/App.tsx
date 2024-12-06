import SearchBar from "./components/page-elements/search-bar";
import NavigationBar from "./components/page-elements/navigation-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(
  () => import("./components/page-content/home/home-main")
);

function App() {
  return (
    <div className="app-main bg-slate-950 h-screen w-screen">
      <span className="app-item navigationbar absolute h-full">
        <NavigationBar />
      </span>
      <div className="items-group page-top-items flex justify-center">
        <span className="app-item search w-1/2 ">
          <SearchBar />
        </span>
        <div className="app-item filterbtn bg-amber-300 text-white absolute right-0 m-5 flex items-center justify-end">
          Filter
        </div>
      </div>
      <div className="app-item content w-[95vw] relative left-[60px] h-[89vh] bg-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
