import React from 'react';
import DevTools from 'mobx-react-devtools';
import {observer, inject} from 'mobx-react';
import {object} from 'prop-types';


import Quiz from './Quiz';

const App = () => {
  return (
      <section>

        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <section>
            <Quiz />
        </section>

      </section>
  );
};


App.propTypes = {
  store: object.isRequired
};


export default inject(`store`)(
  observer(App)
);
