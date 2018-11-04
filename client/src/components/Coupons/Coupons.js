import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import DoneOutlineRounded from '@material-ui/icons/DoneOutlineRounded'

function formatDate(date) {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
    checked: {
        textDecoration: 'line-through',
    }
  });

  class Coupons extends React.Component {
    state = {
      open: false,
    };

    handleClick = () => {
      this.setState(state => ({ open: !state.open }));
    };

    render() {
      console.log(this.props);
      const { classes, coupon, creationDate, usedDate, status } = this.props;

      return (
        <div className={classes.root}>
            <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
                {status === "NEW" ? <StarBorder /> : <DoneOutlineRounded />}
            </ListItemIcon>
            <ListItemText
                className={status === 'NEW' ? null : classes.checked}
                inset
                primary={`${coupon.name} - ${coupon.description}`}
            />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <List>
                        <ListItem>
                            <ListItemText inset primary={"Comprado em: " + formatDate(creationDate) } />
                        </ListItem>
                        <ListItem>
                            {status === "NEW" ? null
                            : <ListItemText inset primary={"Usado em: " + formatDate(usedDate) } />}
                        </ListItem>
                    </List>
                </ListItem>
            </List>
            </Collapse>
        </div>
      );
    };
};
Coupons.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Coupons);
