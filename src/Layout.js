import { Outlet, Link } from "react-router-dom";
import '../src/App.css'


function Layout(){
  return (
    <div className="Nav">
      <nav>
        <ul  className="Navb">
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
          <li>
            <Link to="/Display">Display</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;