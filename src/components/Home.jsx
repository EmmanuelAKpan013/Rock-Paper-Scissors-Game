import Navbar from './Navbar';
import GameLayout from './GameLayout';
import Rules from './Rules';

function Home({ score, setMyChoice }) {
  return (
    <>
      <Navbar score={score} />

      <GameLayout setMyChoice={setMyChoice} />

      <Rules />
    </>
  );
}

export default Home;
