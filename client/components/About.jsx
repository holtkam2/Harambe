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
            No! I want to live! There are still too many things I don't own!
            Who's brave enough to fly into something we all keep calling a
            death sphere? I'm a thing. In your time, yes, but nowadays shut
            up! Besides, these are adult stemcells, harvested from perfectly
            healthy adults whom I killed for their stemcells.
            </div>
            <div className="aboutP">
            That's the ONLY thing about being a slave. Morbo will now
            introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN
            NUMBER TWO, and Morbo's good friend, Richard Nixon. Shut up and
            take my money!
            </div>
          </div>
          <div>
            <h4>what can swick do for you</h4>
            <div className="aboutP">
            Yeah, and if you were the pope they'd be all, "Straighten your
            pope hat." And "Put on your good vestments." Say it in Russian!
            Negative, bossy meat creature! And remember, don't do anything
            that affects anything, unless it turns out you were supposed to,
            in which case, for the love of God, don't not do it!
            </div>
            <div className="aboutP">
            Bender, we're trying our best. I decline the title of Iron Cook
             and accept the lesser title of Zinc Saucier, which I just made
             up. Uhh… also, comes with double prize money. What's with you
             kids? Every other day it's food, food, food. Alright, I'll get
             you some stupid food.
            </div>
          </div>
          <div>
            <h4>about the dev team</h4>
            <div className="aboutP">
              Stop it, stop it. It's fine. I will 'destroy' you! Anyhoo, your
               net-suits will allow you to experience Fry's worm infested
               bowels as if you were actually wriggling through them. Bender,
               being God isn't easy.
            </div>
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
              <div className="aboutP">
                Stop it, stop it. It's fine. I will 'destroy' you! Anyhoo,
                your net-suits will allow you to experience Fry's worm
                infested bowels as if you were actually wriggling through
                them. Bender, being God isn't easy.
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
