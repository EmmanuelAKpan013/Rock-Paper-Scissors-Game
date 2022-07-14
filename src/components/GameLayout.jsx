import { Link } from 'react-router-dom';
import TriangleImage from '../images/bg-triangle.svg';
import RockImage from '../images/icon-rock.svg';
import PaperImage from '../images/icon-paper.svg';
import ScissorsImage from '../images/icon-scissors.svg';

function GameLayout({ setMyChoice }) {
  // const navigate = useNavigate();

  const setChoiceFn = (e) => {
    setMyChoice(e.target.dataset.id);
    // navigate('/picked');
  };

  return (
    <div className="game-layout">
      <div className="triangle">
        <img src={TriangleImage} alt="" />
      </div>
      <Link to="/picked">
        <div
          className="gamediv gamediv--rock"
          data-id="rock"
          onClick={setChoiceFn}
        >
          <img src={RockImage} data-id="rock" alt="rock-icon" />
        </div>
      </Link>

      <Link to="/picked">
        <div
          className="gamediv gamediv--paper"
          data-id="paper"
          onClick={setChoiceFn}
        >
          <img src={PaperImage} data-id="paper" alt="" />
        </div>
      </Link>
      <Link to="/picked">
        <div
          className="gamediv gamediv--scissors"
          data-id="scissors"
          onClick={setChoiceFn}
        >
          <img src={ScissorsImage} data-id="scissors" alt="" />
        </div>
      </Link>
    </div>
  );
}

export default GameLayout;
