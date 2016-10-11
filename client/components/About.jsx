/* eslint-disable max-len */

import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Tabs, Tab } from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';

const inkBarStyle = {
  backgroundColor: 'blue',
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 270,
    overflowX: 'auto',
    marginBottom: 5,
  },
};

const tilesData = [
  {
    img: '../assets/devteam/swick_jb.jpg',
    title: 'Jeff Bernstein',
    subtitle: 'Lead Software Engineer',
  },
  {
    img: '../assets/devteam/swick_jh.png',
    title: 'Jason Holtkamp',
    subtitle: 'Lead Software Engineer',
  },
  {
    img: '../assets/devteam/swick_pk.jpg',
    title: 'Patrik Korzinski',
    subtitle: 'Product Owner/Software Engineer',
  },
  {
    img: '../assets/devteam/swick_rv.jpg',
    title: 'Roni Vegh',
    subtitle: 'Scrum Master/Software Engineer',
  },
];

/**
 The dialog width has been set to occupy the 80% width of browser
 through the `contentStyle` property. */
export default class DialogExampleCustomWidth extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="AboutBTN">
        <IconButton onTouchTap={this.handleOpen}>
          <InfoIcon />
        </IconButton>
        <Dialog
          title="about"
          actions={actions}
          modal={false}
          onRequestClose={this.handleClose}
          // contentStyle={customContentStyle}
          open={this.state.open}
          autoScrollBodyContent
        >
          <Tabs inkBarStyle={inkBarStyle}>
            <Tab label="about swick">
              <div>
                <div className="aboutP">
                  <p>
                    Swick is an app that can help you get to the content you need on the internet much faster.
                  </p>
                  <p>
                    Set up your own buttons to open several tabs with a single click. Configure interest feeds to get the latest info aggregated and streamed to your home page.
                  </p>
                  <p>
                    Also, get friendly greeting dependant on time of day, and your location. This also allows for an overview of your local weather, as well as time of sunset/sunrise depending on current time of day.
                  </p>
                  <p>
                    The SentiBar close to the bottom of the page uses machine learning to analyze the content of financial and global news over the last hour and displays it in a dynamic infographic.
                  </p>
                  <p>
                    And there is still so much more coming! But we are careful to not add anything distracting or that doesn't add actual value or insight for the user. Clean and efficient is the approach to style.
                  </p>
                </div>
              </div>
            </Tab>
            <Tab label="how to use">
              <div>
                <div className="aboutP">
                  <p>
                    To configure a new button or edit an existing one, open the settings panel and input a name. Then, enter all the URLs that you want to open as new tabs when the button is clicked, and save the button.
                    To delete an existing button, just enter the name of the button and hit delete.
                  </p>
                  <p>
                    To configure which interest feeds are streamed at the top of your homepage, just select the 'configure feeds' tab, and select any two that you want displayed. 'Clear' is an option for a nice and quiet environment. The current selection displays the current feeds of course.
                  </p>
                </div>
              </div>
            </Tab>
            <Tab label="dev team">
              <div>
                <div className="aboutP">
                  <p>
                  Swick was built by Jeff Bernstein, <a href="https://www.linkedin.com/in/jasonholtkamp">Jason Holtkamp</a>, <a href="https://www.linkedin.com/in/pkorzinski?authType=NAME_SEARCH&authToken=VG6I&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A128986459%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1475780559139%2Ctas%3APatrik%20Korzins">Patrik Korzinski</a>, and <a href="https://www.linkedin.com/in/ronivegh">Roni Vegh</a> as their thesis project for Hack Reactor.
                  </p>
                </div>
                <div />
                <div style={styles.root}>
                  <GridList
                    cellHeight={250}
                    cols={4}
                    style={styles.gridList}
                  >
                    {tilesData.map(tile => (
                      <GridTile
                        key={tile.img}
                        title={tile.title}
                        subtitle={tile.subtitle}
                      >
                        <img src={tile.img} alt="" />
                      </GridTile>
                    ))}
                  </GridList>
                </div>
              </div>
            </Tab>
            <Tab label="SentiBar">
              <div>
                <div className="aboutP">
                  <p>
                    The SentiBar is our current implementation making use of the power of IBM's Watson. It's a multicolored bar at the bottom of the homepage that displays a dynamic representation of Watson's emotion analysis of a very large amount of financial and global news from the past hour. It's neat, unobtrusive, and adds a splash of color to your experience.
                  </p>
                  <p>
                    The information currently displayed represent a percentage breakdown by color of Watson's analysis. <a style={{ color: 'red' }}>Red</a> represents anger, <a style={{ color: 'purple' }}>purple</a> represents disgust, <a style={{ color: 'green' }}>green</a> represents fear, <a style={{ color: 'yellow' }}>yellow</a> represents joy, and <a style={{ color: 'blue' }}>blue</a> represents sadness. The accuracy and value of this information at this stage of the implementation is a little limited, but can still offer interesting insights.
                  </p>
                </div>
              </div>
            </Tab>
            <Tab label="technology">
              <div>
                <div className="aboutP">
                  <p>
                    Swick was built using ReactJS with Redux for the user interface, with Material UI design. Back end is NodeJS and Express, with PostgreSQL for the database. Authentication is handled through Stormpath.
                  </p>
                  <p>
                    We're using Yahoo Query Language to filter and aggregate the interest feeds, Google maps for geolocation through HTML5, and Dark Sky API and OpenWeatherMap API for weather insights.
                  </p>
                  <p>
                    We also use IBM Watson to analyze financial and global news to find interesting insights using machine learning/neural networks, and present them to the user in a helpful and unobtrusive way. This is where a lot of work happens to improve value and accuracy.
                  </p>
                  <p>
                    Have any ideas for new features? Contact us, or submit a pull request <a href="https://github.com/HRR18-Harambe/swick">here.</a>
                  </p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Dialog>
      </div>
    );
  }
}
