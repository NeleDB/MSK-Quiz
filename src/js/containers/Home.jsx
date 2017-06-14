/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {Link} from 'react-router-dom';
import expoData from '../../assets/data/expositions.json';
import Expo from '../components/Expo/';
import {inject, observer} from 'mobx-react';
import {string} from 'prop-types';


const Home = ({currentImage}) => {

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
            <Link className='button-light' to='/intro'>Wie zoekt die vindt &rarr;</Link>
          </div>
          <img className='scroll-img'></img>
        </div>
      </header>
      <section className='dates'>
        <div className='dates-text'>
          <h1 className='date-title'>Neem je match <br />mee naar één van <br />deze tentoonstellingen</h1>
          <img className='line' src='../../assets/svg/line.svg'></img>
          <div className='dates-tentoonstellingen'>
            {expoData.expositions.map(expo => (
              <Expo key={expo.id} {...expo} />
            ))}
          </div>
          <a className='button-dark' href='https://www.mskgent.be/nl/tentoonstellingen' target='_blank'>Meer tentoonstellingen &rarr;</a>
        </div>
        <img className='tentoonstelling-img' src={`../../assets/img/${currentImage}.png`} height='475'></img>
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
        <img className='app-image' src='../../assets/img/app-img.png' width='242' height='478'></img>
        <img className='app-icon' src='../../assets/img/app-icon.png' width='150' height='150'></img>

        <div className='app-text'>
          <h1 className='app-title'>Wil je meer?</h1>
          <img className='line' src='../../assets/svg/line.svg' ></img>
          <p className='app-txt'>Liep je vorige bezoek aan het MSK uit op een flater? Download de Kunst.klik app en zoek een nieuwe buddy!</p>
          <div className='appstore'>
            <img className='applestore' src='../../assets/img/appstore.jpg' height='40'></img>
            <img className='googlestore' src='../../assets/img/playstore.jpg' height='40'></img>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <img src='../../assets/img/msk-wit.png' width='75' height='66' />
        <address className='address'>
          Fernand Scribedreef 1 <br />
          +32 (0)9/323.67.00 <br />
          <a className='email' href='mailto:museum.msk@gent.be'>museum.msk@gent.be</a>
        </address>
      </footer>
    </div>
  );
};

Home.propTypes = {
  currentImage: string.isRequired
};

export default inject(
  ({store}) => {
    return {currentImage: store.currentImage};
  }
)(
  observer(Home)
);
