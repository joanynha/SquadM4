import React from 'react'

import { Chart } from "react-google-charts"

import './graph.css'

export const data = [
  ["Equipe", "Pontos", { role: "style" } ],
  ["Houston Rockets", 158, "#ec1f1f"],
  ["Washington Wizards", 158, "#2a2086"],
  ["Atlanta Hawks", 152, "#ddb504"],
  ["Milwaukee Bucks", 151, "#285f2a"],
  ["LA Clippers", 150, "#2e4beb"],
];

export const options = {
  backgroundColor: '#020202',
  title: "5 Equipes que mais marcaram em casa",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Pontos",
    titleTextStyle:{color: '#FFF'},
    minValue: 0,
    textStyle:{color: '#FFF'},
    
  },
  vAxis: {
    title: "Equipes",
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


const Graph5 = () => {
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
        <p>Houston Rockets - 158 pontos</p>
        <p>Washington Wizards - 158 pontos</p>
        <p>Atlanta Hawks - 152 pontos</p>
        <p>Milwaukee Bucks - 151 pontos</p>
        <p>LA Clippers - 150 pontos</p>
    </div>
    </div>
  )
}

export default Graph5