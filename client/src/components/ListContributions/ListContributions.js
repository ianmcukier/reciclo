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
  }
});

function ListContributions(props) {
  const { classes, trade, exchange, date} = props;
  return (
    <div className={classes.root}>
    <List>
        <div>
            <ListItem>
                <Contributions  name = {trade.name}
                                quantity = {exchange[0].quantity}
                                metric = {exchange[0].item.exchange.metric}
                                type = {exchange[0].item.type}
                                date = {date}
                                />
            </ListItem>
            <li>
            <Divider component="li" />
            </li>
            <ListItem>
            <Contributions      name = {trade.name}
                                quantity = {exchange[1].quantity}
                                metric = {exchange[1].item.exchange.metric}
                                type = {exchange[1].item.type}
                                date = {date}
                            />
            </ListItem>
        </div>

    </List>
    </div>
  );
}

ListContributions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListContributions);
