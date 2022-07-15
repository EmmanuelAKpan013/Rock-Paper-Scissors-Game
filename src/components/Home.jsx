import Navbar from './Navbar';
import GameLayout from './GameLayout';
import Footer from './Footer';

function Home({ score, setMyChoice }) {
  return (
    <>
      <Navbar score={score} />
      <GameLayout setMyChoice={setMyChoice} />
      <Footer />
    </>
  );
}

export default Home;
