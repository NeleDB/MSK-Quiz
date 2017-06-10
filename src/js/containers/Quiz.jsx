/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Questions from '../components/Questions';
import {inject, observer} from 'mobx-react';
import {number} from 'prop-types';

const Quiz = ({currentQuestion}) => {

  return (
    <div>
        <Questions id={currentQuestion} />
    </div>
  );
};

Quiz.propTypes = {
  currentQuestion: number.isRequired
};

export default inject(
  ({store}) => {
    const {currentQuestion} = store;
    return {currentQuestion};
  }
)(
  observer(Quiz)
);
