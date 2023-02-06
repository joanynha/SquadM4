import React from 'react'

import { Chart } from "react-google-charts"

import './graph.css'

export const data = [
  ["Estádio", "Capacidade", { role: "style" } ],
  ["Fiserv Forum", 17385, "#285f2a"],
  ["Golden 1 Center", 17608, "#999999"],
  ["Smoothie King Center", 17791, "#f3bc25"],
  ["Toyota Center", 18104, "#d82121"],
  ["FedEx Forum", 18119, "#31339e"],
  ["Bankers Life FieldHouse", 18345, "#e0d20a"],
  ["Talking Stick Resort", 18422, "#6d2380"],
  ["TD Garden", 18624, "#18db06"],
  ["AT&T Center", 18694, "#504d4d"],
  ["State Farm Arena", 18729, "#f33434"],
];

export const options = {
  backgroundColor: '#020202',
  title: "10 Menores Arenas",
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

const graph2 = () => {
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
      <p>Fiserv Forum - 17.385 pessoas</p>
      <p>Golden 1 Center - 17.608 pessoas</p>
      <p>Smoothie King Center - 17.791 pessoas</p>
      <p>Toyota Center - 18.104 pessoas</p>
      <p>FedExForum - 18.119 pessoas</p>
      <p>Bankers Life FieldHouse - 18.345 pessoas</p>
      <p>Talking Stick Resort - 18.422 pessoas</p>
      <p>TD Garden - 18.624 pessoas</p>
      <p>AT&T Center - 18.694 pessoas</p>
      <p>State Farm Arena - 18.729 pessoas</p>
    </div>
    </div>
  )
}

export default graph2