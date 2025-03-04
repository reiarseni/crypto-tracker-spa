// Función que simula obtener las 50 principales criptomonedas.
// En un entorno real, podrías usar la API de CoinGecko u otra fuente confiable.
export async function getTop50Cryptos() {
  return [
    { symbol: 'BTCUSDT', name: 'Bitcoin' },
    { symbol: 'ETHUSDT', name: 'Ethereum' },
    { symbol: 'USDTUSDT', name: 'Tether' },
    { symbol: 'BNBUSDT', name: 'BNB' },
    { symbol: 'XRPUSDT', name: 'XRP' },
    { symbol: 'ADAUSDT', name: 'Cardano' },
    { symbol: 'DOGEUSDT', name: 'Dogecoin' },
    { symbol: 'SOLUSDT', name: 'Solana' },
    { symbol: 'DOTUSDT', name: 'Polkadot' },
    { symbol: 'LTCUSDT', name: 'Litecoin' },
    { symbol: 'SHIBUSDT', name: 'Shiba Inu' },
    { symbol: 'TRXUSDT', name: 'TRON' },
    { symbol: 'AVAXUSDT', name: 'Avalanche' },
    { symbol: 'UNIUSDT', name: 'Uniswap' },
    { symbol: 'WBTCUSDT', name: 'Wrapped Bitcoin' },
    { symbol: 'LINKUSDT', name: 'Chainlink' },
    { symbol: 'LEOUSDT', name: 'LEO Token' },
    { symbol: 'ATOMUSDT', name: 'Cosmos' },
    { symbol: 'ETCUSDT', name: 'Ethereum Classic' },
    { symbol: 'XMRUSDT', name: 'Monero' },
    { symbol: 'BCHUSDT', name: 'Bitcoin Cash' },
    { symbol: 'ALGOUSDT', name: 'Algorand' },
    { symbol: 'VETUSDT', name: 'VeChain' },
    { symbol: 'ICPUSDT', name: 'Internet Computer' },
    { symbol: 'FILUSDT', name: 'Filecoin' },
    { symbol: 'MANAUSDT', name: 'Decentraland' },
    { symbol: 'SANDUSDT', name: 'The Sandbox' },
    { symbol: 'AXSUSDT', name: 'Axie Infinity' },
    { symbol: 'THETAUSDT', name: 'Theta Network' },
    { symbol: 'FTTUSDT', name: 'FTX Token' },
    { symbol: 'EGLDUSDT', name: 'Elrond' },
    { symbol: 'KLAYUSDT', name: 'Klaytn' },
    { symbol: 'NEARUSDT', name: 'NEAR Protocol' },
    { symbol: 'XTZUSDT', name: 'Tezos' },
    { symbol: 'HNTUSDT', name: 'Helium' },
    { symbol: 'GRTUSDT', name: 'The Graph' },
    { symbol: 'FTMUSDT', name: 'Fantom' },
    { symbol: 'CAKEUSDT', name: 'PancakeSwap' },
    { symbol: 'MKRUSDT', name: 'Maker' }
  ];
}

// Obtiene datos históricos (últimas 24 horas en intervalos de 5 minutos) para la criptomoneda indicada.
// Utiliza la API pública de Binance. Se esperan 288 datos (24h * 12 intervalos).
export async function fetchHistoricalData(symbol) {
  const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=5m&limit=288`;
  const response = await fetch(url);
  const data = await response.json();

  // Transforma los datos para Highcharts: [timestamp, open, high, low, close]
  return data.map(item => [
    item[0],                      // timestamp
    parseFloat(item[1]),          // open
    parseFloat(item[2]),          // high
    parseFloat(item[3]),          // low
    parseFloat(item[4])           // close
  ]);
}

