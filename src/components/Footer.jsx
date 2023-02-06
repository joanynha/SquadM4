import { Link } from "react-router-dom";

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <ul class="wrapper">
          <a href="https://github.com/vinicius170" target="_blank" rel="noopener noreferrer">
              <li class="icon facebook">
                  <span class="tooltip">Vinicius</span>
                  <span></span>
              </li>
          </a>
          <a href="https://github.com/joanynha" target="_blank" rel="noopener noreferrer">
          <li class="icon twitter">
              <span class="tooltip">Mateus</span>
              <span><i class="fab fa-twitter"></i></span>
          </li>

          </a>
          <a href="https://github.com/afelipinas" target="_blank" rel="noopener noreferrer">
          <li class="icon instagram">
              <span class="tooltip">Felipe</span>
              <span><i class="fab fa-instagram"></i></span>
          </li>

          </a>
          <a href="https://github.com/Daniel26oliver" target="_blank" rel="noopener noreferrer">
          <li class="icon twitter">
              <span class="tooltip">Daniel</span>
              <span><i class="fab fa-twitter"></i></span>
          </li>

          </a>
      </ul>        
    </footer>
    
  )
}

export default Footer