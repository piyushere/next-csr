import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from 'src/components/Home';
import About from 'src/components/About';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
