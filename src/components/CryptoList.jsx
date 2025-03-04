import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTop50Cryptos } from '../services/api';
import { connectWebSocket, disconnectWebSocket } from '../services/websocket';
import '../styles/CryptoList.css';

function CryptoList() {
  const navigate = useNavigate();
  const [followedCryptos, setFollowedCryptos] = useState(() => {
    const saved = localStorage.getItem('followedCryptos');
    return saved ? JSON.parse(saved) : [];
  });
  const [topCryptos, setTopCryptos] = useState([]);
  const [priceData, setPriceData] = useState({});

  useEffect(() => {
    // Carga la lista de las 50 principales criptomonedas (puede adaptarse a una API real)
    async function fetchTopCryptos() {
      const data = await getTop50Cryptos();
      setTopCryptos(data);
    }
    fetchTopCryptos();
  }, []);

  useEffect(() => {
    // Guarda en localStorage la lista de criptomonedas seguidas
    localStorage.setItem('followedCryptos', JSON.stringify(followedCryptos));
  }, [followedCryptos]);

  useEffect(() => {
    // Conecta al WebSocket para actualizar precios en tiempo real
    const ws = connectWebSocket((symbol, price) => {
      setPriceData(prev => ({ ...prev, [symbol]: price }));
    });
    return () => {
      disconnectWebSocket(ws);
    };
  }, []);

  const addCrypto = (e) => {
    const symbol = e.target.value;
    if (symbol && !followedCryptos.includes(symbol)) {
      setFollowedCryptos([...followedCryptos, symbol]);
    }
  };

  const removeCrypto = (symbol) => {
    setFollowedCryptos(followedCryptos.filter(item => item !== symbol));
  };

  return (
    <div className="crypto-list-container">
      <h1>Seguimiento de Criptomonedas</h1>
      <div className="add-crypto">
        <select onChange={addCrypto} defaultValue="">
          <option value="" disabled>
            Selecciona una criptomoneda
          </option>
          {topCryptos.map(crypto => (
            <option key={crypto.symbol} value={crypto.symbol}>
              {crypto.name} ({crypto.symbol})
            </option>
          ))}
        </select>
      </div>
      <ul className="crypto-list">
        {followedCryptos.map(symbol => (
          <li key={symbol} className="crypto-item">
            <span
              onClick={() => navigate(`/crypto/${symbol}`)}
              className="crypto-name"
            >
              {symbol}
            </span>
            <span className="crypto-price">
              {priceData[symbol] ? `$${ priceData[symbol].toFixed(4) }` : 'Cargando...'}
            </span>
            <button onClick={() => removeCrypto(symbol)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CryptoList;

