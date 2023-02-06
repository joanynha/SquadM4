import React from 'react'

import maisnovos from '../images/Maisnovos.jpeg'

import './graph.css'



const graph3 = () => {
  return (
    <div className='inLigne'>
      <div>
      <img className='bigbox3' src={maisnovos} />
      </div>
      <div>
          <p>New Orleans Pelicans - 2002</p>
          <p>Memphis Grizzlies - 1995</p>
          <p>Toronto Raptors - 1995</p>
          <p>Minnesota Timberwolves - 1989</p>
          <p>Orlando Magic - 1989</p>
      </div>
    </div>
  )
}

export default graph3