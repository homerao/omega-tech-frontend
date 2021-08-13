import React from 'react';
import './styles/App.css';
import logoOmega from './assets/logo-omega.svg'
import fotoBanner from './assets/banner.webp'
import linkedin from "./assets/linkedin.svg"
import instagram from "./assets/instagram.svg"
import youtube from "./assets/youtube.svg"
import facebook from "./assets/facebook.svg"
import twitter from "./assets/twitter.svg"
import Home from "./pages/Home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="bg-white loginsize relative">
        <div id="loginpage">
          <aside className="banner">
            <img src={logoOmega} alt="" width="240" />
            <img src={fotoBanner} alt="Ilustração simbolizando perguntas e respostas" width="650" className="rounded-3xl" />
            <div className="icons">
              <a href="https://www.linkedin.com/company/omegaenergia/" target="_blank"><img src={linkedin} alt="" /></a>
              <a href="https://www.instagram.com/instadaomega/" target="_blank"><img src={instagram} alt="" /></a>
              <a href="https://www.youtube.com/channel/UC1z7YCcHngTPCRgzfayX6BA" target="_blank"><img src={youtube} alt="" /></a>
              <a href="https://www.facebook.com/omegaenergiarenovavel" target="_blank"><img src={facebook} alt="" /></a>
              <a href="https://twitter.com/tweetdaomega" target="_blank"><img src={twitter} alt="" /></a>
            </div>
          </aside>
          <main id="conteudo">

            <div className="maincontent shadow-lg rounded-3xl">
              teste
            </div>

          </main>
        </div>
      </div>
    </>
  );
}

export default App;
