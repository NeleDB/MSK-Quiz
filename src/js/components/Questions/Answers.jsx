import React from 'react';
import {array, func, string} from 'prop-types';
import Answer from './Answer';
import {inject, observer} from 'mobx-react';


const Answers = ({antwoorden, nextQuestion, selectedAnswer}) => {

  const handleClickNext = e => {
    e.preventDefault();
    nextQuestion();
  };

  return (
    <div>
      <ul>
        {
          antwoorden.map(a => (
            <Answer key={antwoorden.indexOf(a)} antwoord={a.id} />
          ))
        }
      </ul>
      <button onClick={handleClickNext} disabled={selectedAnswer === `` ? `disabled` : ``}>Next Question</button>
    </div>
  );
};

Answers.propTypes = {
  antwoorden: array.isRequired,
  nextQuestion: func.isRequired,
  selectedAnswer: string.isRequired
};

export default inject(
  ({store}) => {
    const {nextQuestion, selectedAnswer} = store;
    return {nextQuestion, selectedAnswer};
  }
)(
  observer(Answers)
);
