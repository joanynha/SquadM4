import React from 'react'

import './Equipe.css'

import felipe from '../images/Felipe.jpeg'
import mateus from '../images/Mateus.jpeg'
import vinicius from '../images/Vinicius.jpeg'
import daniel from '../images/Daniel.jpeg'

const Equipe = () => {
  return (
    <div>
      <section class="team">
        <div class="center">
            <h1>Equipe</h1>
        </div>

        <div class="team-content">
            <div class="box">
                <img src={felipe} />
                <h3>Felipe</h3>
                <h5>Co-Facilitador</h5>
                <div class="icones">
                    <a href=""><i class="ri-github-fill"></i></a>
                    <a href=""><i class="ri-linkedin-box-fill"></i></a>
                </div>
            </div>

            <div class="box">
                <img src={mateus} />
                <h3>Mateus</h3>
                <h5>Gestor de Conhecimento</h5>
                <div class="icones">
                    <a href=""><i class="ri-github-fill"></i></a>
                    <a href=""><i class="ri-linkedin-box-fill"></i></a>
                </div>
            </div>

            <div class="box">
                <img src={daniel} />
                <h3>Daniel</h3>
                <h5>Colaborador</h5>
                <div class="icones">
                    <a href=""><i class="ri-github-fill"></i></a>
                    <a href=""><i class="ri-linkedin-box-fill"></i></a>
                </div>
            </div>

            <div class="box">
                <img src={vinicius} />
                <h3>Vinicius</h3>
                <h5>Gestor de Gente e Engajamento</h5>
                <div class="icones">
                    <a href=""><i class="ri-github-fill"></i></a>
                    <a href=""><i class="ri-linkedin-box-fill"></i></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Equipe