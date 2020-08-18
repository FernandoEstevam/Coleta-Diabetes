import React from 'react';

// Image 
import logo from '../../assets/image/logo.png';
import enfermeiro from '../../assets/image/enfermeiro.png';

// Styles
import './style.css'

function Home() {
  return(
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Logo Diabetes" />
          <h2>Controle de coleta</h2>
        </div>
        <div className="img-medico-container">
          <img src={enfermeiro} alt="Enfermeiro"/>
        </div>

        <form>
          <div className="block-input">
            <label htmlFor="login">Login</label>
            <input type="text" name="login" id="login" />
          </div>

          <div className="block-input">
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
          </div>

        </form>
      </div>
    </div>
  )
}

export default Home;