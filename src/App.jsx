import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import CryptoDetail from './components/CryptoDetail';
import AnalysisPage from './components/AnalysisPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/crypto/:symbol" element={<CryptoDetail />} />
        <Route path="/analysis/:symbol" element={<AnalysisPage />} />
      </Routes>
    </Router>
  );
}

export default App;





