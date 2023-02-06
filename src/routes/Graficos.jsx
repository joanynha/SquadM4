import React from 'react'

import { Link } from "react-router-dom";

import "./Grafico.css"


const graficos = () => {
  return (
    <div className='bigboxx'>
      <div className='conteudo'>
        <label className='teste' htmlFor="">Quais são as 10 maiores arenas por capacidade?</label>
    <Link to={'/Graph1'} className="botao">Clique aqui</Link>
      </div>
      <div className='conteudo'>
        <label className='teste' htmlFor="">Quais são as 10 menores arenas por capacidade?</label>
    <Link to={'/Graph2'} className="botao">Clique aqui</Link>
      </div>
      <div className='conteudo'>
        <label className='teste' htmlFor="">Quais são os 5 times mais novos?</label>
    <Link to={'/Graph3'} className="botao">Clique aqui</Link>
      </div>
      <div className='conteudo'>
        <label className='teste' htmlFor="">Quais são 5 times mais antigos?</label>
    <Link to={'/Graph4'} className="botao">Clique aqui</Link>
      </div>
      <div className='conteudo'>
        <label className='teste' htmlFor="">Quais são os 5 times que marcaram mais pontos em casa em 2019?</label>
    <Link to={'/Graph5'} className="botao">Clique aqui</Link>
    </div>
    </div>
    )
}

export default graficos