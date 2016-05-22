import React from 'react';
// require('./Tweet.css');

export default class Tweet extends React.Component {

  static propTypes = {
    data: React.PropTypes.object
  };

  static defaultProps = {
    data: {}
  };

  render() {
    var tweet = this.props.data;

    return (
      <li className='tweet'>
        <img src={tweet.avatar} className="avatar" />
        <blockquote>
          <cite>
            <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a>
            <span className="screen-name">@{tweet.screenname}</span>
          </cite>
          <span className="content">{tweet.body}</span>
        </blockquote>
      </li>
    );
  }
}
