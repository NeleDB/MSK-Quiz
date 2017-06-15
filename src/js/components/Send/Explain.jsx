import React from 'react';
import {string} from 'prop-types';

const Explain = ({content}) => {
  return (
    <p className='result-text'>{content}</p>
  );
};

Explain.propTypes = {
  content: string.isRequired
};

export default Explain;
