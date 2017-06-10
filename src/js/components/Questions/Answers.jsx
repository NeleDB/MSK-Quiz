import React from 'react';
import {array, func} from 'prop-types';
import Answer from './Answer';
import {inject, observer} from 'mobx-react';


const Answers = ({antwoorden, nextQuestion}) => {

  const handleClickNext = e => {
    e.preventDefault();
    nextQuestion();
  };

  return (
    <div>
      <ul>
        {
          antwoorden.map(a => (
            <Answer key={antwoorden.indexOf(a)} antwoord={a} />
          ))
        }
      </ul>
      <button onClick={handleClickNext}>Next Question</button>
    </div>
  );
};

Answers.propTypes = {
  antwoorden: array.isRequired,
  nextQuestion: func.isRequired
};

export default inject(
  ({store}) => {
    const {nextQuestion} = store;
    return {nextQuestion};
  }
)(
  observer(Answers)
);
