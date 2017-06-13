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
          <h1 className='date-title'>Neem je match mee naar één van deze tentoonstellingen</h1>
          <div className='dates-tentoonstellingen'>
            <div className='tentoonstelling'>
              <h1 className='tentoonstelling-title'>Metaflora</h1>
              <p className='tentoonstelling-desc'>Een tentoonstelling over bloemen</p>
            </div>
            <div className='tentoonstelling'>
              <h1 className='tentoonstelling-title'>Muurkladder</h1>
              <p className='tentoonstelling-desc'>Een tentoonstelling over muren bekladderen</p>
            </div>
            <div className='tentoonstelling'>
              <h1 className='tentoonstelling-title'>Herstelling van Lam Gods</h1>
              <p className='tentoonstelling-desc'>Ja vree wijs, maar je mag geen fotos nemen</p>
            </div>
            <a className='button-dark' href='https://www.mskgent.be/nl/tentoonstellingen' target='_blank'>Meer tentoonstellingen &rarr;</a>
          </div>
        </div>
        <img className='tentoonstelling-img'></img>
      </section>
      <section className='stats'>
        <div className='statistic'>
          {/* <!-- svg kan eventueel ook --> */}
          <img className='stats-img'></img>
          <p className='stats-txt'>123 matches</p>
        </div>
        <div className='statistic'>
          {/* <!-- svg kan eventueel ook --> */}
          <img className='stats-img'></img>
          <p className='stats-txt'>123 gebruikers</p>
        </div>
        <div className='statistic'>
          {/* <!-- svg kan eventueel ook --> */}
          <img className='stats-img'></img>
          <p className='stats-txt'>123 buddy visits</p>
        </div>
      </section>
      <section className='app'>
        <img className='app-image'></img>
        <div className='app-text'>
          <h1 className='app-title'>Wil je meer?</h1>
          <p>Liep je vorige bezoek aan het MSK uit op een flater? Download de Kunst.klik app en zoek een nieuwe buddy!</p>
          <div className='appstore'>
            <img className='applestore'></img>
            <img className='googlestore'></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
