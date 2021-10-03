import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {HashRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

