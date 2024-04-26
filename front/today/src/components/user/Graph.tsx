import React from 'react';
import { WebView } from 'react-native-webview';

type RadarChartProps = {
  labels: string[];
  data: number[];
  chartTitle: string;
};

const Graph = ({ labels, data, chartTitle }: RadarChartProps) => {
  const chartHtml = `
    <html>
      <head>
        <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
      </head>
      <body>
        <div id="chart"></div>
        <script>
          var data = [{
            type: 'scatterpolar',
            r: [${data.join(',')}],
            theta: [${labels.map(label => `"${label}"`).join(',')}],
            fill: 'toself',
            fillcolor: 'rgba(254, 139, 139, 0.65)',
            line: {
              color: '#FE8B8B',
            }
          }];
          
          var layout = {
            height: 800,
            polar: {
              // 방사축
              radialaxis: {
                visible: true,
                range: [0, 20],
                showticklabels: false,
                showline: false,
                ticklen: 0,
              },
              // 각축
              angularaxis: { 
                color: '#FE8B8B',   // 선 색깔
                ticklen: 0,
                tickfont: {         // 폰트
                  color: '#FE8B8B',
                  size: 30,
                },
              },
              gridshape: 'linear',
            },
            title: {
              text: "${chartTitle}",
              font: {
                size: 50,
                color: 'rgba(23, 21, 21, 0.8)'
              }
            },
            showlegend: false,
          };      

          var config = { displayModeBar: false };

          Plotly.newPlot('chart', data, layout, config);
        </script>
      </body>
    </html>
  `;

  return <WebView originWhitelist={['*']} source={{ html: chartHtml }} style={{ flex: 1 }} />;
};

export default Graph;
