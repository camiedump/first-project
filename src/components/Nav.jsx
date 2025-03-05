import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./hero.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <button onClick={() => setIsOpen(!isOpen)} className="burger-menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul className={`nav-links ${isOpen ? "open" : "closed"}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-me" className="nav-link" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}