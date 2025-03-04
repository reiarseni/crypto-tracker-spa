import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CandleChart from './CandleChart';
import { fetchHistoricalData } from '../services/api';
import '../styles/CryptoDetail.css';

function CryptoDetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [historicalData, setHistoricalData] = useState([]);
  const [error, setError] = useState(null);

  const loadHistoricalData = async () => {
    try {
      const data = await fetchHistoricalData(symbol);
      setHistoricalData(data);
    } catch (err) {
      setError('Error al cargar datos históricos');
    }
  };

  useEffect(() => {
    loadHistoricalData();
    // Actualiza los datos cada 5 minutos (300000 ms)
    const interval = setInterval(loadHistoricalData, 300000);
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="crypto-detail-container">
      <button onClick={() => navigate('/')}>Volver</button>
      <h2>{symbol} - Gráfico de Velas Japonesas</h2>
      {error && <p className="error">{error}</p>}
      <CandleChart data={historicalData} />
    </div>
  );
}

export default CryptoDetail;

