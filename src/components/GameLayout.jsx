import TriangleImage from '../images/bg-triangle.svg';
import RockImage from '../images/icon-rock.svg';
import PaperImage from '../images/icon-paper.svg';
import ScissorsImage from '../images/icon-scissors.svg';

function GameLayout() {
  return (
    <div className="game-layout">
      <div className="triangle">
        <img src={TriangleImage} alt="" />
      </div>
      <div className="gamediv gamediv--rock">
        <img src={RockImage} alt="rock-icon" />
      </div>
      <div className="gamediv gamediv--paper">
        <img src={PaperImage} alt="" />
      </div>
      <div className="gamediv gamediv--scissors">
        <img src={ScissorsImage} alt="" />
      </div>
    </div>
  );
}

export default GameLayout;
