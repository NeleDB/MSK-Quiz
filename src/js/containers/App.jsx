import React from 'react';
import DevTools from 'mobx-react-devtools';
import {Route} from 'react-router-dom';

import Quiz from './Quiz';
import Send from './Send';


const App = () => (

  <section>

    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

    <header>
      <h1>Hello, {name}</h1>
    </header>

    <section>
      <Route
        exact path='/'
        component={Quiz}
      />
      <Route
        exact path='/send'
        component={Send}
      />
    </section>

  </section>

);

export default App;
