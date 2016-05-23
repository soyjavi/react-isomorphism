import ntwitter from 'ntwitter';
import SocketIO from 'socket.io';
import store from './store';

const CONFIG = require('./config/twitter.production.json');
const SEARCH = 'javascript, ecmascript6, es6, reactjs';

module.exports = (server) => {
  let io = SocketIO(server);
  let twitter = new ntwitter(CONFIG);

  twitter.stream('statuses/filter', {track: SEARCH}, (stream) => {
    stream.on('data', (data) => {
      const tweet = {
        id: data['id'],
        author: data['user']['name'],
        avatar: data['user']['profile_image_url_https'],
        body: data['text'],
        date: data['created_at'],
        screenname: data['user']['screen_name']
      };
      store(tweet);
      io.emit('tweet', tweet);
    });
  });
}
