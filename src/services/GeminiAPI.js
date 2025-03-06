import fetchHistoricalData from './api';
class GeminiAPI {
    constructor(apiKey) {
      this.apiKey = apiKey;
    }
  
    async generateSummary(symbol) {
      const historicalData = await fetchHistoricalData(symbol);
    if (!historicalData || historicalData.length === 0) {
      throw new Error('CRYPTO_DATA_NOT_FOUND');
    }
    const content = historicalData.map(data => `Timestamp: ${data[0]}, Open: ${data[1]}, High: ${data[2]}, Low: ${data[3]}, Close: ${data[4]}`).join('\n');
      const payload = await this.buildPayload(content);
      const response = await fetch(
        `${'https://generativelanguage.googleapis.com/v1beta/models'}/${'gemini-1.5-flash'}:generateContent?key=${this.apiKey}`, 
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );
  
      if (!response.ok) throw new Error('API_ERROR_' + response.status);
  
      const data = await response.json();
      return this.parseResponse(data);
    }
  
    async buildPayload(content) {
      const promptTemplate = "Utiliza la API pública de Binance para obtener datos de precio y volumen en la temporalidad de 5 minutos en las últimas 24 horas. Se obtienen los datos de las últimas 24 horas en intervalos de 5 minutos para la criptomoneda BTC (datos de temporalidad de 5 minutos). Realiza un análisis técnico detallado del comportamiento del BTC en el día de ayer. Incluye los siguientes puntos clave en el informe: describe la tendencia general del precio de BTC a lo largo del día, analiza la volatilidad del precio de BTC durante el día, examina el volumen de transacciones de BTC a lo largo del día, identifica los momentos más importantes del día en términos de cambios de precio y volumen. Proporciona un informe claro y comprensible sobre el comportamiento del BTC en el día de ayer, destacando las tendencias, la volatilidad y el volumen de transacciones. Datos obtenidos: {CONTENT}.";	
      const prompt = promptTemplate.replace('{CONTENT}', content);
  
      return {
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.35,
        }
      };
    }
  
    parseResponse(data) {
      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error('NO_SUMMARY');
      }
      return data.candidates[0].content.parts[0].text;
    }
  }
  
  export default GeminiAPI;