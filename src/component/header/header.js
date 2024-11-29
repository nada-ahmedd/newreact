import { Component } from "react";
class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
            </header>
        )
    }
}
 export default Header;
