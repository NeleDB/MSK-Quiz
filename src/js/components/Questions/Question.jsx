import React from 'react';
import {string} from 'prop-types';

const Question = ({vraag}) => {
  return (
    <h1>{vraag}</h1>
  );
};

Question.propTypes = {
  vraag: string.isRequired
};



export default Question;
