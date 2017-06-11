/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Questions from '../components/Questions';
import {inject, observer} from 'mobx-react';
import {number, bool} from 'prop-types';
import Send from '../components/Send';

const Quiz = ({currentQuestion, lastAnswer}) => {

  if (lastAnswer) {
    return <Send />;
  }

  return (
    <div>
        <Questions id={currentQuestion} />
    </div>
  );
};

Quiz.propTypes = {
  currentQuestion: number.isRequired,
  lastAnswer: bool.isRequired
};

export default inject(
  ({store}) => {
    const {currentQuestion, lastAnswer} = store;
    return {currentQuestion, lastAnswer};
  }
)(
  observer(Quiz)
);
