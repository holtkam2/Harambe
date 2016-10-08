import React, { Component, PropTypes } from 'react';
// import RSSFeed from './RSSFeed.jsx';

class RSSFeedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rssFeed, chosenRssFeed1, chosenRssFeed2 } = this.props;
    console.log(chosenRssFeed1, '==============================================');
    return (
    <div className="RSSFeedList">
    <div
      className="marquee marquee-speed-drowsy" data-marquee={
        // JSON.stringify(rssFeed[chosenRssFeed1])
        this.props.rssFeed[this.props.chosenRssFeed1].map(feed => feed).join(' * ')
        // .map(feed => feed).join(' * ')
      }
    /><div
      className="marquee marquee-speed-drowsy" data-marquee={
         // JSON.stringify(rssFeed[chosenRssFeed2])
        this.props.rssFeed[this.props.chosenRssFeed2].map(feed => feed).join(' * ')
      }
    /></div>

    );
  }
}
// const RSSFeedList = ({ rssFeed, chosenRssFeed1, chosenRssFeed2 }) => (
//   <div className="RSSFeedList">
//     <div
//       className="marquee marquee-speed-drowsy" data-marquee={
//         // JSON.stringify(rssFeed[chosenRssFeed1])
//         rssFeed[chosenRssFeed1].map(feed => feed).join(' * ')
//         // .map(feed => feed).join(' * ')
//       }
//     /><div
//       className="marquee marquee-speed-drowsy" data-marquee={
//          // JSON.stringify(rssFeed[chosenRssFeed2])
//         rssFeed[chosenRssFeed2].map(feed => feed).join(' * ')
//       }
//     /></div>
// );

RSSFeedList.propTypes = {
  rssFeed: PropTypes.objectOf(PropTypes.array),
};

export default RSSFeedList;
