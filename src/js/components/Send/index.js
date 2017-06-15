/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {inject, observer} from 'mobx-react';
import {func, object, bool} from 'prop-types';
import data from '../../../assets/data/quiz.json';
import Explain from './Explain';
import {Link} from 'react-router-dom';

const Send = ({handleEmail, answers, email, checkEmail, beginAgain}) => {

  let $email;

  const handleSubmit = e => {
    e.preventDefault();
    checkEmail($email.value);
    if ($email.value !== ``) {
      handleEmail($email.value);
      $email.value = ``;
    }

  };

  const dataAnwers = answer => {
    const dataArray = [];
    data.vragen.map(v => v.antwoorden).forEach(antwoord => antwoord.map(a => dataArray.push(a)));
    return dataArray.find(d => d.id === answer);
  };

  const handleClickBack = () => {
    beginAgain();
  };

  dataAnwers();

  return (
    <div>
      <header className='quiz-header'>
        <div className='logo quiz-logo'>
          <h1 className='hidden'>Kunst.klik</h1>
        </div>
      </header>
      <div className='question-container'>
        <h1 className='result'>Dit is jouw resultaat!</h1>
        <div className='result-div'>
        {
          answers.map(a =>
            <Explain key={a} content={dataAnwers(a).uitleg} />
          )
        }
        </div>
        <h1 className='email-title'>Vul jouw email-adres in en wij zoeken voor jou de ideale match!</h1>

        <form className='email-form' onSubmit={handleSubmit}>

          <label >Email adres</label>
          <input className='email-input' type='email' ref={$el => $email = $el} placeholder='naam@example.com' />
          <p className={email === false ? `error` : `hidden`}>Vul je email-adres in</p>
          <input
            type='submit'
            value='Verstuur'
            className='button-dark email-submit'
            />
        </form>
        <Link to='/' className='return-button' onClick={handleClickBack}>Terug naar de website</Link>
      </div>
    </div>
  );
};

Send.propTypes = {
  handleEmail: func.isRequired,
  answers: object.isRequired,
  checkEmail: func.isRequired,
  email: bool.isRequired,
  beginAgain: func.isRequired
};

export default inject(
  ({store}) => {
    const {handleEmail, answers, checkEmail, email, beginAgain} = store;
    return {handleEmail, answers, checkEmail, email, beginAgain};
  }
)(
  observer(Send)
);
