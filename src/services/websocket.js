let socket;

export function connectWebSocket(onPriceUpdate) {
  // Conecta al stream combinado de Binance para actualizaciones de todos los tickers
  socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

  socket.onopen = () => {
    console.log('Conexión WebSocket establecida.');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    // Si el mensaje es un arreglo, recorre cada ticker y actualiza el precio
    if (Array.isArray(data)) {
      data.forEach(ticker => {
        const symbol = ticker.s;
        const price = parseFloat(ticker.c);
        onPriceUpdate(symbol, price);
      });
    } else {
      // En caso de recibir un único ticker
      const symbol = data.s;
      const price = parseFloat(data.c);
      onPriceUpdate(symbol, price);
    }
  };

  socket.onerror = (error) => {
    console.error('Error en WebSocket: ', error);
  };

  socket.onclose = () => {
    console.log('Conexión WebSocket cerrada. Reintentando en 5 segundos...');
    setTimeout(() => {
      connectWebSocket(onPriceUpdate);
    }, 5000);
  };

  return socket;
}

export function disconnectWebSocket(socketInstance) {
  if (socketInstance && socketInstance.readyState === WebSocket.OPEN) {
    socketInstance.close();
  }
}

