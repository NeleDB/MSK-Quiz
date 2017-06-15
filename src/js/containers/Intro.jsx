import React from 'react';
import {Link} from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      <h1>Hello Intro</h1>
      <Link to='/quiz'>Start</Link>
    </div>
  );
};

export default Intro;
