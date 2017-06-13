/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string, func} from 'prop-types';
import {inject, observer} from 'mobx-react';


const Expo = ({title, explain, link, img, setImage}) => {

  const handleMouseOver = () => {
    setImage(img);
  };

  return (
    <div className='tentoonstelling'>
      <a href={link} target='_blank' className='tentoonstelling-title' onMouseOver={handleMouseOver}>&rarr; {title}</a>
      <p className='tentoonstelling-desc'>{explain}</p>
    </div>
  );
};

Expo.propTypes = {
  title: string.isRequired,
  explain: string.isRequired,
  link: string.isRequired,
  img: string.isRequired,
  setImage: func.isRequired
};


export default inject(
  ({store}) => {
    return {setImage: store.setImage};
  }
)(
  observer(Expo)
);
