import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" end>
        전체
      </NavLink>
      <NavLink to="/active">미완료</NavLink>
      <NavLink to="/api">API</NavLink>
    </nav>
  );
}

export default Navigation;
