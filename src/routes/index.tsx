import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('src/components/Home'));
const About = React.lazy(() => import('src/components/About'));

function App() {
  return (
    <React.Suspense fallback={<div>loading bruh</div>}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
