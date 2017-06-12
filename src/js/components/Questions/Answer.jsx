import React from 'react';
import {string, func} from 'prop-types';
import {inject, observer} from 'mobx-react';


const Answer = ({antwoord, handleAnswer}) => {

  const handleClickAnswer = e => {
    e.preventDefault();
    handleAnswer(antwoord);
  };

  return (
    <li onClick={handleClickAnswer}>
      {antwoord}
    </li>
  );
};

Answer.propTypes = {
  antwoord: string.isRequired,
  handleAnswer: func.isRequired
};

export default inject(
  ({store}) => {
    const {handleAnswer} = store;
    return {handleAnswer};
  }
)(
  observer(Answer)
);
