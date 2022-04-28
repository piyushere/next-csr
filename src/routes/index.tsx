import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('src/components/Home'));
const About = React.lazy(() => import('src/components/About'));

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
