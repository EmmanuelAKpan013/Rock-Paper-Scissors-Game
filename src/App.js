import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './components/Home';
import Picked from './components/Picked';

function App() {
  const [score, setScore] = useState(10);
  const [myChoice, setMyChoice] = useState('');

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home score={score} setMyChoice={setMyChoice} />}
          />
          <Route
            path="/picked"
            element={
              <Picked score={score} setScore={setScore} myChoice={myChoice} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
