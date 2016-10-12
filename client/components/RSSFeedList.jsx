import React, { Component, PropTypes } from 'react';
// import RSSFeed from './RSSFeed.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class RSSFeedList extends Component {
// constructor not needed at this time

  render() {
    // eslint-disable-next-line no-unused-vars
    const { rssFeed, chosenRssFeed1, chosenRssFeed2 } = this.props;

    return (
      <div className="RSSFeedList">
        <div
          className="marquee marquee-speed-drowsy"
          data-marquee={
            // JSON.stringify(rssFeed[chosenRssFeed1])
            this.props.rssFeed[this.props.chosenRssFeed1].map(feed => feed).join(' * ')
            // .map(feed => feed).join(' * ')
          }
        />
        <div
          className="marquee marquee-speed-drowsy"
          data-marquee={
             // JSON.stringify(rssFeed[chosenRssFeed2])
            this.props.rssFeed[this.props.chosenRssFeed2].map(feed => feed).join(' * ')
          }
        />
      </div>
    );
  }
}

RSSFeedList.propTypes = {
  rssFeed: PropTypes.objectOf(PropTypes.array),
  chosenRssFeed1: PropTypes.string,
  chosenRssFeed2: PropTypes.string,
};

export default RSSFeedList;
