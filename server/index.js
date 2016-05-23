import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import stream from './stream';
import store from './store';
import TwitterStream from '../components/TwitterStream';

let app = express();
app.use('/static', express.static('static'));
app.get('/', (req, res) => {
  const tweets = store();
  const bindings = {
    store: tweets,
    markup: ReactDOMServer.renderToString(<TwitterStream tweets={tweets}/>)
  };
  res.render('index.ejs', bindings);
});

let server = app.listen(8080, () => console.log('Listening on port 8080!') );

stream(server);
