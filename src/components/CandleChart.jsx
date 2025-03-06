import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

function CandleChart({ data }) {
  const options = {
    chart: {
      // Puedes configurar la altura interna si es necesario
      height: '100%'
    },
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'Gráfico de Velas'
    },
    series: [
      {
        type: 'candlestick',
        name: 'Precio',
        data: data,
        tooltip: {
          valueDecimals: 2
        }
      }
    ]
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}> {/* Contenedor de pantalla completa */}
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
}

export default CandleChart;

