import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

function CandleChart({ data }) {
  const options = {
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
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
}

export default CandleChart;

