import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GeminiAPI from '../services/GeminiAPI';
import '../styles/AnalysisPage.css';
const AnalysisPage = () => {
  const { symbol } = useParams();
  const [apiKey, setApiKey] = useState('');
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    try {
      const geminiAPI = new GeminiAPI(apiKey);
      const result = await geminiAPI.generateSummary(symbol);
      setSummary(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setSummary(null);
    }
  };

  return (
    <div id="analysis-page">
      <h1>Análisis de Criptomonedas</h1>
      <input
        type="text"
        placeholder="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <br />
      <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" data-i18n="apiKeyLabel">Si no tiene APi key, buscala aqui</a>
      <br />
      <br />
      <button onClick={handleAnalyze}>Analizar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {summary && (
        <div id="summary">
          <h2>Resumen de las últimas 24 horas</h2>
          <pre>{summary}</pre>
        </div>
      )}
    </div>
  );
};

export default AnalysisPage;