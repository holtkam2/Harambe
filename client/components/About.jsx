import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
// import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '90%',
    height: 275,
    overflowX: 'auto',
    marginBottom: 24,
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
 The dialog width has been set to occupy the full width of browser
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
        keyboardFocused
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
          modal
          contentStyle={customContentStyle}
          open={this.state.open}
          autoScrollBodyContent
        >
          <div>
            <h4>about the app</h4>
            <div className="aboutP">
            Swick is an app that can help you get to the content that you need on the internet much faster. Set up buttons to open several tabs with a single click. Configure RSS feeds to get info streamed to your home page, and recieve notifications when there is relevent breaking news.
            </div>
          </div>
          <div>
            <h4>how to use Swick</h4>
            <div className="aboutP">
            To configure a new button, open the settings panel and give it a name. Then, enter all the URLs that you want to open as new tabs when the button is clicked.
            </div>
            <div className="aboutP">
            To configure a new feed to stream at the top of your page, start by giving it a name in the settings panel. Then add RSS feeds url's to it and Swick will automatically compile and process them to display them as one. Click save to make sure it's there the next time you log in.
            </div>
          </div>
          <div>
            <h4>about the dev team</h4>
            <div className="aboutP">
              Swick was built by Jeff Bernstein, <a href ="https://www.linkedin.com/in/jasonholtkamp">Jason Holtkamp</a>, <a href ="https://www.linkedin.com/in/pkorzinski?authType=NAME_SEARCH&authToken=VG6I&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A128986459%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1475780559139%2Ctas%3APatrik%20Korzins">Patrik Korzinski</a>, and <a href ="https://www.linkedin.com/in/ronivegh">Roni Vegh</a> as their thesis project for Hack Reactor.

            </div>
            <div> </div>
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
            <div>
              <h4>technology</h4>
              <div className="aboutP">
                Swick was built using ReactJS with Redux for the user interface, NodeJS and Express for the back end, and PostgreSQL for the database. It uses IBM Watson machine learning to analyze and find significant news based on a user's interest list. Have any ideas for new features? Submit a pull request <a href ="https://github.com/HRR18-Harambe/Harambe">here.</a>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
