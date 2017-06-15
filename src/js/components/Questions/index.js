/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {number} from 'prop-types';
import data from '../../../assets/data/quiz.json';
import Question from './Question';
import Answers from './Answers';
import {Link} from 'react-router-dom';

const Questions = ({id}) => {

  const currentQuestion = () => {
    return data.vragen.find(c => c.id === id);
  };
  return (
    <div>
      <header className='quiz-header'>
        <Link to='/'>
          <div className='quiz-logo logo-zwart'>
            <h1 className='hidden'>Kunst.klik</h1>
          </div>
        </Link>
      </header>
      <div className='question-container'>
        <Question vraag={currentQuestion().vraag} />
        <Answers antwoorden={currentQuestion().antwoorden} />
      </div>
    </div>
  );
};

Questions.propTypes = {
  id: number.isRequired
};

export default Questions;
