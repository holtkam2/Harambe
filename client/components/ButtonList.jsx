import React from 'react';
import LinkButton from './LinkButton.jsx';

const ButtonList = () => (
  <div className="buttonList">
    <LinkButton name={'Seach Engines'} urls={['https://www.google.com', 'https://www.yahoo.com', 'https://www.bing.com']} />
    <LinkButton name={'Forums'} urls={['https://www.reddit.com', 'https://news.ycombinator.com']} />
    <LinkButton name={'News'} urls={['https://news.google.com', 'http://www.foxnews.com']} />
  </div>
);

export default ButtonList;
