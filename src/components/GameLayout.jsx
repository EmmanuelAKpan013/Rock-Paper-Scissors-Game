import { useNavigate } from 'react-router-dom';

import TriangleImage from '../images/bg-triangle.svg';
import RockImage from '../images/icon-rock.svg';
import PaperImage from '../images/icon-paper.svg';
import ScissorsImage from '../images/icon-scissors.svg';

function GameLayout() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/picked');
  };

  return (
    <div className="game-layout">
      <div className="triangle">
        <img src={TriangleImage} alt="" />
      </div>
      <div className="gamediv gamediv--rock" onClick={handleClick}>
        <img src={RockImage} alt="rock-icon" />
      </div>
      <div className="gamediv gamediv--paper" onClick={handleClick}>
        <img src={PaperImage} alt="" />
      </div>
      <div className="gamediv gamediv--scissors" onClick={handleClick}>
        <img src={ScissorsImage} alt="" />
      </div>
    </div>
  );
}

export default GameLayout;
