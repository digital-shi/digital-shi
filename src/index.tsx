import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import './i18n/i18n';
import * as serviceWorker from './serviceWorker';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

ReactDOM.render(
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
