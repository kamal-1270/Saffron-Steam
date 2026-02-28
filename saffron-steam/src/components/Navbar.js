import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = {
    fontWeight: "600",
    padding: "8px 15px",
    borderRadius: "15px",
    transition: "all 0.3s ease",
    textDecoration: "none"
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm p-3"
      style={{
        background: "linear-gradient(135deg, #111, #2c2c2c)"
      }}
    >
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: "#c97a40" }}
          onClick={closeMenu}
        >
          Saffron & Steam
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          style={{ border: "none" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        {/* Menu */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto">

            {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/menu" },
              { name: "About", path: "/about" },
              { name: "Find Us", path: "/contact" }
            ].map((item, index) => (
              <li className="nav-item ms-2" key={index}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  style={({ isActive }) => ({
                    ...linkStyle,
                    color: isActive ? "#fff" : "#ddd",
                    backgroundColor: isActive ? "#c97a40" : "transparent",
                    boxShadow: isActive
                      ? "0 5px 15px rgba(201,122,64,0.4)"
                      : "none"
                  })}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;