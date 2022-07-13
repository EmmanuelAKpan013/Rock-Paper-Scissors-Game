import Logo from '../images/logo.svg';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="score">
        SCORE <br />
        <span className="score-text">13</span>
      </div>
    </div>
  );
}

export default Navbar;
