import React from 'react';
import ReactDOM from 'react-dom';
import HomeIndex from './page/home/index';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
//引入store
import store from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeIndex/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
