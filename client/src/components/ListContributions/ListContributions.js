import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Contributions from '../Contributions/Contributions';

const styles = theme => ({
  root: {
    marginTop: '2em',
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  secondary: {
      textAlign: 'right',
  },
  list: {
    width: '100%',
  }
});

function ListContributions(props) {
  const { classes, contributions} = props;
  return (
    <div className={classes.root}>
    <List>
      {
        contributions.map((contribution, index) => (
          <React.Fragment>
          <ListItem className={classes.list}>
            {contribution.exchange.map(e => (
              <Contributions  name ={contribution.trade.name}
                quantity = {e.quantity}
                metric = {e.item.exchange.metric}
                type = {e.item.type}
                date = {contribution.date}
              />
            ))}
          </ListItem>
          {
            index === contributions.length - 1
            ? null
            : <Divider component="li" />
          }
          </React.Fragment>
        ))
      }
    </List>
    </div>
  );
}

ListContributions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListContributions);
