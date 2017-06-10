import React from 'react';
import {string} from 'prop-types';

import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Quiz from './Quiz';


const App = ({name}) => (

  <section>

    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

    <header>
      <h1>Hello, {name}</h1>
    </header>

    <section>
      <Quiz />
    </section>

  </section>

);

App.propTypes = {
  name: string.isRequired
};

export default inject(
  ({store}) => ({
    name: store.name
  })
)(
  observer(App)
);
