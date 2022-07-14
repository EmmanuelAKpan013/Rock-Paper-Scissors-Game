import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Rules from './Rules';
import RockImage from '../images/icon-rock.svg';
import PaperImage from '../images/icon-paper.svg';
import ScissorsImage from '../images/icon-scissors.svg';

function Picked({ score, setScore, myChoice }) {
  const [housePick, setHousePick] = useState();
  const [playerStatus, setPlayerStatus] = useState();

  const housePickFn = () => {
    const options = ['rock', 'paper', 'scissors'];
    setHousePick(options[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    housePickFn();
  }, []);

  const resultFn = () => {
    if (myChoice === 'rock' && housePick === 'paper') {
      setPlayerStatus('YOU LOSE');
      setScore(score - 1);
    }
    if (myChoice === 'rock' && housePick === 'scissors') {
      setPlayerStatus('YOU WIN');
      setScore(score + 1);
    }
    if (myChoice === 'rock' && housePick === 'rock') {
      setPlayerStatus('DRAW ');
    }
    if (myChoice === 'paper' && housePick === 'rock') {
      setPlayerStatus('YOU WIN');
      setScore(score + 1);
    }
    if (myChoice === 'paper' && housePick === 'scissors') {
      setPlayerStatus('YOU LOSE');
      setScore(score - 1);
    }
    if (myChoice === 'paper' && housePick === 'paper') {
      setPlayerStatus('DRAW');
    }
    if (myChoice === 'scissors' && housePick === 'paper') {
      setPlayerStatus('YOU WIN');
      setScore(score + 1);
    }
    if (myChoice === 'scissors' && housePick === 'rock') {
      setPlayerStatus('YOU LOSE');
      setScore(score - 1);
    }
    if (myChoice === 'scissors' && housePick === 'scissors') {
      setPlayerStatus('DRAW');
    }
  };

  useEffect(() => {
    resultFn();
  }, [housePick]);

  return (
    <>
      <Navbar score={score} />

      <div className="game-layout">
        <div className="player-1">
          <h3>YOU PICKED</h3>
          <br />
          <div
            className={`${
              playerStatus === 'YOU WIN'
                ? `gamediv gamediv--${myChoice}-color-winner`
                : `gamediv gamediv--${myChoice}-color`
            }`}
          >
            {myChoice === 'rock' && <img src={RockImage} alt="rock-icon" />}
            {myChoice === 'paper' && <img src={PaperImage} alt="paper-icon" />}
            {myChoice === 'scissors' && (
              <img src={ScissorsImage} alt="scissors-icon" />
            )}
          </div>
        </div>

        <div className="result">
          <h3 className="result-text">{playerStatus}</h3>
          <Link to="/">
            <button
              className={`replay replay-${
                playerStatus === 'YOU WIN' ? `${myChoice}` : `${housePick}`
              }`}
            >
              Play Again
            </button>
          </Link>
        </div>

        <div className="player-2">
          <h3>THE HOUSE PICKED</h3>
          <br />
          <div
            className={`${
              playerStatus === 'YOU LOSE'
                ? `gamediv gamediv--${housePick}-color-winner`
                : `gamediv gamediv--${housePick}-color`
            }`}
          >
            {housePick === 'rock' && <img src={RockImage} alt="rock-icon" />}
            {housePick === 'paper' && <img src={PaperImage} alt="paper-icon" />}
            {housePick === 'scissors' && (
              <img src={ScissorsImage} alt="scissors-icon" />
            )}
          </div>
        </div>
      </div>

      <Rules />
    </>
  );
}

export default Picked;
