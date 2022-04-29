import "./App.css";
// import User from "./pages/User";
// import About from "./pages/About";
import * as React from "react";
// import Header from "./components/common/Header";
import { Route, Router, Routes, BrowserRouter, Link } from "react-router-dom";

const Header = React.lazy(() => import("./components/common/Header"));
const About = React.lazy(() => import("./pages/About"));
const User = React.lazy(() => import("./pages/User"));

function App() {
  return (
    <>
      <div className="App">
        <React.Suspense fallback={<>...</>}>
          <Header />
        </React.Suspense>
      </div>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      <Routes>
        <Route
          path="/user"
          element={
            <React.Suspense fallback={<>...</>}>
              <User />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
