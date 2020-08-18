import React from 'react';

// Image 
import logo from '../../assets/image/logo.png';
import enfermeiro from '../../assets/image/enfermeiro.png';
import userIcon from '../../assets/image/icons/user.png';
import lockIcon from '../../assets/image/icons/lock.png';
import lacoIcon from '../../assets/image/icons/laco.png';

// Styles
import './style.css'

function Home() {
  return(
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="content-image">
          <div className="logo-container">
            <img src={logo} alt="Logo Diabetes" />
            <h2>Controle de coleta</h2>
          </div>
          <div className="img-medico-container">
            <img src={enfermeiro} alt="Enfermeiro"/>
          </div>
        </div>

        <form>
          <div className="input-block">
            <label htmlFor="login">
              <img src={userIcon} alt="Login" />
            </label>
            <input 
              type="text" 
              name="login" 
              id="login" 
              placeholder="login"  
            />
          </div>

          <div className="input-block">
            <label htmlFor="password">
              <img src={lockIcon} alt="Password" />
            </label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="password"
            />
          </div>
          <button type="submit">
            Entrar
            <img src={lacoIcon} alt="Entrar laco"/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home;