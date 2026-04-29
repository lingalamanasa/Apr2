/*import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home </Link> |{" "}
      <Link to="/about">About </Link> |{" "}
      <Link to="/services">Services </Link> |{" "}
      <Link to="/contact">Contact </Link> |{" "}
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
*/
//TASK 15
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>Foodie 🍔</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;