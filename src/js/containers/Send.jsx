/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {inject, observer} from 'mobx-react';
import {func} from 'prop-types';

const Send = ({handleEmail}) => {

  let $email;

  const handleSubmit = e => {
    e.preventDefault();
    handleEmail($email.value);
  };

  return (
    <form className='add' onSubmit={handleSubmit}>
      <input type='email' ref={$el => $email = $el} />
      <input
        type='submit'
        value='Add'
        className='add-submit'
        />
    </form>
  );
};

Send.propTypes = {
  handleEmail: func.isRequired
};

export default inject(
  ({store}) => {
    const {handleEmail} = store;
    return {handleEmail};
  }
)(
  observer(Send)
);
