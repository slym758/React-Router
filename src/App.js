import { Route, Routes, Link } from "react-router-dom";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Users from "./componenets/Users";
import User from "./componenets/User";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<User />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
