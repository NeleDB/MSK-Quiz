import React from 'react';
import {string} from 'prop-types';

const Explain = ({content}) => {
  console.log(content);
  return (
    <p>{content}</p>
  );
};

Explain.propTypes = {
  content: string.isRequired
};

export default Explain;
