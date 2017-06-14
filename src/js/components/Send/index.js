/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {inject, observer} from 'mobx-react';
import {func, object} from 'prop-types';
import data from '../../../assets/data/quiz.json';
import Explain from './Explain';

const Send = ({handleEmail, answers}) => {

  let $email;

  const handleSubmit = e => {
    e.preventDefault();
    handleEmail($email.value);
  };

  const dataAnwers = answer => {
    const dataArray = [];
    data.vragen.map(v => v.antwoorden).forEach(antwoord => antwoord.map(a => dataArray.push(a)));
    return dataArray.find(d => d.id === answer);
  };

  dataAnwers();

  return (
    <div>
      <h1>Vul jouw email adres in en wij zoeken voor jou je ideale match!</h1>
      <form className='add' onSubmit={handleSubmit}>
        <input type='email' ref={$el => $email = $el} />
        <input
          type='submit'
          value='Add'
          className='add-submit'
          />
      </form>
      <h2>Resultaat</h2>
      {
        answers.map(a =>
          <Explain key={a} content={dataAnwers(a).uitleg} />
        )
      }
    </div>
  );
};

Send.propTypes = {
  handleEmail: func.isRequired,
  answers: object.isRequired
};

export default inject(
  ({store}) => {
    const {handleEmail, answers} = store;
    return {handleEmail, answers};
  }
)(
  observer(Send)
);
