import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/List">List</Link>
          </li>
          <li>
            <Link to="/Condition">Condition</Link>
          </li>
          <li>
            <Link to="/Form">Form</Link>
          </li>
          <li>
            <Link to="/Timer">Timer</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;