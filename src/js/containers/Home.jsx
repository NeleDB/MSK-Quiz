/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <header className='header'>
        <div className='logo'>
          <h1 className='hidden'>Kunst.klik</h1>
        </div>
        <div className='fold'>
          <img className='fold-img' src='../../assets/img/header-img.png' />
          <div className='fold-text'>
            <h1 className='fold-title'>Heb jij jouw museum maatje al gevonden?</h1>
            <Link className='button-light' to='/quiz'>Wie zoekt die vindt &rarr;</Link>
          </div>
          <img className='scroll-img'></img>
        </div>
      </header>
      <section className='dates'>
        <div className='dates-text'>
          <h1 className='date-title'>Neem je match <br />mee naar één van <br />deze tentoonstellingen</h1>
          <div className='dates-tentoonstellingen'>
            <div className='tentoonstelling'>
              <a className='tentoonstelling-title'>&rarr; Metafloristiek:  22.04.16 - 31.10.18</a>
              <p className='tentoonstelling-desc'>Wegdromen in een denkbeeldige natuur</p>
            </div>
            <div className='tentoonstelling'>
              <a className='tentoonstelling-title'>&rarr; Restauratie Lam Gods:  01.10.12 - 31.12.19</a>
              <p className='tentoonstelling-desc'>Sinds 2012 worden de panelen van het Lam Gods
gerestaureerd in het MSK.</p>
            </div>
            <div className='tentoonstelling'>
              <a className='tentoonstelling-title'>&rarr; Written Room:  11.02.17 - 31.12.18</a>
              <p className='tentoonstelling-desc'>Door Iraanse kunstenaar Parastou Forouhar</p>
            </div>
          </div>
          <a className='button-dark' href='https://www.mskgent.be/nl/tentoonstellingen' target='_blank'>Meer tentoonstellingen &rarr;</a>
        </div>
        <img className='tentoonstelling-img' src='../../assets/img/metafloristiek.png' height='475'></img>
      </section>
      <section className='stats'>
        <div className='statistic'>
          <img className='stats-img' src='../../assets/svg/people-icon.svg' height='30'></img>
          <p className='stats-txt'>1700 gebruikers</p>
        </div>
        <div className='statistic'>
          <img className='stats-img' src='../../assets/svg/match-icon.svg' height='30'></img>
          <p className='stats-txt'>1500 matches</p>
        </div>
        <div className='statistic'>
          <img className='stats-img' src='../../assets/svg/painting-icon.svg' height='30'></img>
          <p className='stats-txt'>710 buddy visits</p>
        </div>
      </section>
      <section className='app'>
        <img className='app-image' src='../../assets/img/app-img.png'></img>
        <div className='app-text'>
          <h1 className='app-title'>Wil je meer?</h1>
          <p>Liep je vorige bezoek aan het MSK uit op een flater? Download de Kunst.klik app en zoek een nieuwe buddy!</p>
          <div className='appstore'>
            <img className='applestore' src='../../assets/img/appstore.jpg' height='40'></img>
            <img className='googlestore' src='../../assets/img/playstore.jpg' height='40'></img>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <p>hey</p>
      </footer>
    </div>
  );
};

export default Home;
