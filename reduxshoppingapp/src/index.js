import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import configStore from './redux/reducers/configStore';
import 'alertifyjs/build/css/alertify.min.css';

const store=configStore();

ReactDOM.render(
  <Provider store={store}>
  <App />
 </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
