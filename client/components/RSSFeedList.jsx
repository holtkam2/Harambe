import React, { PropTypes } from 'react';
// import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed }) => (
  <div className="RSSFeedList">
    <div className="marquee" data-marquee=
      {
        rssFeed.map(feed => feed.text).join(' * ')
      }
      >
    </div>
    <div className="marquee marquee-speed-fast" data-marquee="

    FTSE 100 7,033.25   -41.09 -0.58% DAX 10,585.78  -33.83 -0.32%
CAC 40  4,489.95   -13.14 -0.29%
TR EUROPE 149.79   + 0.35 +0.24% EUR/USD  1.1216  +0.12%
GBP/USD 1.2754  +0.21% FTSE 100 7,033.25   -41.09 -0.58% DAX 10,585.78  -33.83 -0.32%
CAC 40  4,489.95   -13.14 -0.29%
TR EUROPE 149.79   + 0.35 +0.24% EUR/USD  1.1216  +0.12%
GBP/USD 1.2754  +0.21%">


    </div>
  </div>
);

RSSFeedList.propTypes = {
  rssFeed: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RSSFeedList;
