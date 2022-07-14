import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';

function Navbar({ score }) {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="score">
        SCORE <br />
        <span className="score-text">{score}</span>
      </div>
    </div>
  );
}

export default Navbar;
