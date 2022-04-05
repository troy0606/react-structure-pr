import "./App.css";
import User from "./pages/User";
import About from "./pages/About";
import Header from "./components/common/Header";
import { Link } from "react-router-dom";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Header/>
      </div>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
