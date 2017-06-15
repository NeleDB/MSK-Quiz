import React from 'react';
import {Link} from 'react-router-dom';

const Intro = () => {
  return (
    <div className='quiz-intro'>
      <h1 className='quiz-intro-title'>Zoek mijn museum maatje</h1>
      <p className='quiz-intro-explain'>Aan de hand van deze quiz zoeken we een match met jouw ideale museum buddy. Wanneer we er voor
        jou één gevonden hebben, krijg je een mail met jouw match en een kleine verrassing van het MSK.</p>
      <Link className='quiz-intro-button button-dark' to='/quiz'>Start</Link>
    </div>
  );
};

export default Intro;
