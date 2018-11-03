import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Coupons from '../Coupons/Coupons';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ListCoupons extends React.Component {
  
  render() {
    console.log(this.props);
    const { classes, registry1, registry2, registry3 } = this.props;
    return (
        <div>
            <List
            component="nav"
            subheader={<ListSubheader component="div">Registro de Coupons</ListSubheader>}
            >
                <Coupons {...registry1} />
                <Coupons {...registry2} />
                <Coupons {...registry3} />
            </List>
        </div>
    );
  }
}

ListCoupons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListCoupons);
