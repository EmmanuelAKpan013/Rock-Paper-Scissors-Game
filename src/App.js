import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Picked from './components/Picked';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/picked" element={<Picked />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
