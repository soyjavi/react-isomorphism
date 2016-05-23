import React from 'react';
import ReactDOM from 'react-dom';
import TwitterStream from '../components/TwitterStream';
const store = JSON.parse(document.getElementById('store').innerHTML);

ReactDOM.render(
  <TwitterStream tweets={store} />, document.getElementById('react-app')
);
