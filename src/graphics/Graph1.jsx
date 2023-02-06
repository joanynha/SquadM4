import React from 'react'

import { Chart } from "react-google-charts"

import './graph.css'

export const data = [
  ["Estádio", "Capacidade", { role: "style" } ],
  ["United Center", 23500, "#ec1f1f"],
  ["Little Caesars", 21000, "#2e3bf0"],
  ["Capital One", 20647, "#2a2086"],
  ["Quicken Loans", 20562, "#940f16"],
  ["Vivint Smart Home", 20148, "#dff326"],
  ["Amway Center", 20000, "#29ccf5"],
  ["Moda Center", 19980, "#f55929"],
  ["Scotiabank Arena", 19800, "#e429f5"],
  ["Madison Square Garden", 19763, "#f58529"],
  ["AmericanAirlines Arena", 19600, "#c4085f"],
];

export const options = {
  backgroundColor: '#020202',
  title: "10 Maiores Arenas",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Capacidade",
    titleTextStyle:{color: '#FFF'},
    minValue: 0,
    textStyle:{color: '#FFF'},
    
  },
  vAxis: {
    title: "Estádio",
    titleTextStyle:{color: '#FFF'},
    textStyle:{color: '#FFF'}
  },
  legend: {textStyle: { color: '#FFF'}},
  titleTextStyle:{color: '#FFF'},
  animation: {
    startup: true,
    easing: "linear",
    duration: 2000,
  },
};

// const options = {
//   backgroundColor: '#0C161E',
//   hAxis: {
//     textStyle:{color: '#FFF'}
// },
//   vAxis: {
//   textStyle:{color: '#FFF'}
// },
//   legend: {textStyle: { color: '#FFF'}},
//   // is3D: true
// };

const graph1 = () => {
  return (
    <div className='bigbox2'>
      <div>
      <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
    <div>
      <p>United Center - 23.500 pessoas</p>
      <p>Little Caesars - 21.000 pessoas</p>
      <p>Capital One - 20.647 pessoas</p>
      <p>Quicken Loans - 20.562 pessoas</p>
      <p>Vivint Smart Home - 20.148 pessoas</p>
      <p>Amway Center - 20.000 pessoas</p>
      <p>Moda Center - 19.980 pessoas</p>
      <p>Scotiabank Arena - 19.800 pessoas</p>
      <p>Madison Square Garden - 19.763 pessoas</p>
      <p>AmericanAirlines Arena - 19.600 pessoas</p>
    </div>
    </div>
  )
}

export default graph1