import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import CryptoDetail from './components/CryptoDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/crypto/:symbol" element={<CryptoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;





