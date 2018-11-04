import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { List } from '@material-ui/core';

const styles = {
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
    size: 100,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    
  },
  list: {
      align: 'center',
  }
};

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.list}>
        <h2>Olá, Rubens!</h2>
        Troque seus pontos agora por bônus
        Neste momento você possui 50 pontos!
    </div>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);