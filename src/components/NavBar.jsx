import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
      </div>
      <div>
        <ul>
            <li>
                <Link to={`/`} className="new-btn">Início</Link>
            </li>
            <li>
                <Link to={`/Graficos`} className="new-btn">Dados</Link>
            </li>
            <li>
                <Link to={`/Equipe`} className="new-btn">Equipe</Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar