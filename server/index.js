import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import stream from './stream'
import TwitterStream from '../components/TwitterStream'

let app = express();
app.use('/static', express.static('static'));
app.get('/', (req, res) => {
  const bindings = { markup: ReactDOMServer.renderToString(<TwitterStream/>)};
  res.render('index.ejs', bindings);
});

let server = app.listen(8080, () => console.log('Listening on port 8080!') );

stream(server);
