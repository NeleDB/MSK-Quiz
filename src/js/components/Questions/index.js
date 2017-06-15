/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {number} from 'prop-types';
import data from '../../../assets/data/quiz.json';
import Question from './Question';
import Answers from './Answers';

const Questions = ({id}) => {

  const currentQuestion = () => {
    return data.vragen.find(c => c.id === id);
  };
  return (
    <div>
      <header className='quiz-header'>
        <div className='logo'>
          <h1 className='hidden'>Kunst.klik</h1>
        </div>
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
