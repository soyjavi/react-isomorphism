import React from 'react';
import Tweet from './Tweet.js'
const styles = require('./Tweets.css');

export default class Tweets extends React.Component {
  render() {
    return (
      <ul className="tweets">
        { this.props.dataSource.map((data) => <Tweet key={data.id} data={data} />) }
      </ul>
    );
  }
}
