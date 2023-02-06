import React from 'react'

import maisantigos from '../images/Maisantigos.jpeg'

import './graph.css'


const graph4 = () => {
  return (
    <div className='inLigne'>
      <div>
      <img className='bigbox3' src={maisantigos} />
      </div>
      <div>
          <p>Boston Celtics - 1946</p>
          <p>Golden State Warriors - 1946</p>
          <p>New York Knicks - 1946</p>
          <p>Detroit Pistons - 1948</p>
          <p>Sacramento Kings - 1948</p>
      </div>
    </div>
  )
}

export default graph4