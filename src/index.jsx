import React from 'react'

import backg from './images/backg6.jpg'

import { Link } from "react-router-dom";

const index = () => {
  return (
    <div >
      <img className='bigbox' src={backg} />
    </div>
  )
}

export default index