import React from 'react';
import Notification from './Notification'
import Tweets from './Tweets'
// require('./index.css');

export default class TwitterStream extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      tweets: props.tweets || [],
      unreads: []
    };
  };

  // -- Lifecycle
  componentDidMount() {
    io.connect().on('tweet', (tweet) => {
      let unreads = this.state.unreads;
      unreads.push(tweet);
      this.setState({ unreads: unreads });
    });
  }

  // -- Events
  handlerClickUnreads = (event) => {
    let tweets = this.state.tweets;
    this.state.unreads.map( (tweet) => tweets.unshift(tweet) );
    this.setState({ tweets: tweets, unreads: [] });
  };

  // -- Render
  render() {
    const unreads = this.state.unreads.length;
    return (
      <div>
        <h2>Twitter Stream</h2>
        { unreads > 0 ? <Notification count={unreads} onClick={this.handlerClickUnreads} /> : null }
        <Tweets dataSource={this.state.tweets} />
      </div>
    );
  }
}
