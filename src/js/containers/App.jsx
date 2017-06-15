import React from 'react';
import DevTools from 'mobx-react-devtools';
import {observer, inject} from 'mobx-react';
import {object} from 'prop-types';
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';


import Quiz from './Quiz';
import Home from './Home';
import Intro from './Intro';

const App = () => {
  return (
      <section>

        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <Router>
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/intro`} component={Intro} />
            <Route exact path={`/quiz`} component={Quiz} />
            <Route render={() => <Redirect to='/' />} />
          </Switch>
        </Router>
      </section>
  );
};


App.propTypes = {
  store: object.isRequired
};


export default inject(`store`)(
  observer(App)
);
