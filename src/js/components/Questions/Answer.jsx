import React from 'react';
import {string, func} from 'prop-types';
import {inject, observer} from 'mobx-react';


const Answer = ({antwoord, handleAnswer, selectedAnswer}) => {

  const handleClickAnswer = e => {
    e.preventDefault();
    handleAnswer(antwoord);
  };

  return (
    <li onClick={handleClickAnswer}>
      <img className={selectedAnswer === antwoord ? `quiz-img selected` : `quiz-img`} src={`../../../assets/img/${antwoord}.png`} />
    </li>
  );
};

Answer.propTypes = {
  antwoord: string.isRequired,
  handleAnswer: func.isRequired,
  selectedAnswer: string.isRequired
};

export default inject(
  ({store}) => {
    const {handleAnswer, selectedAnswer} = store;
    return {handleAnswer, selectedAnswer};
  }
)(
  observer(Answer)
);
