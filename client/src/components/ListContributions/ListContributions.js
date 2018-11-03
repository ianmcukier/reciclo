import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Contributions from '../Contributions/Contributions';
import ListItemText from '@material-ui/core/ListItemText';

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

function InsetDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <List>
        <div>
            <ListItem>
                <Contributions  user = {props.contribution[0].user}
                                peso = {props.contribution[0].peso}
                                lixo = {props.contribution[0].lixo}
                                data = {props.contribution[0].data}
                                />
            </ListItem>
            <li>
            <Divider />
            </li>
            <ListItem>
            <Contributions  user = {props.contribution[1].user}
                            peso = {props.contribution[1].peso}
                            lixo = {props.contribution[1].lixo}
                            data = {props.contribution[1].data}
                            />
            </ListItem>
            <Divider component="li" />
            <ListItem>
            <Contributions  user = {props.contribution[2].user}
                            peso = {props.contribution[2].peso}
                            lixo = {props.contribution[2].lixo}
                            data = {props.contribution[2].data}
                            />
            </ListItem>
        </div>

    </List>
    </div>
  );
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);
