import RockImage from '../images/icon-rock.svg';
import PaperImage from '../images/icon-paper.svg';
import ScissorsImage from '../images/icon-scissors.svg';

function PickedLayout() {
  return (
    <>
      <div className="game-layout">
        <div className="gamediv gamediv--rock-color">
          <img src={RockImage} alt="rock-icon" />
        </div>
        <div className="gamediv gamediv--paper-color">
          <img src={PaperImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default PickedLayout;
