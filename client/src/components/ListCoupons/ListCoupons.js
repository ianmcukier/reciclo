import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
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
    const { couponRegistry } = this.props;
    console.log(this.props);
    return (
        <div>
            <List
            component="nav"
            subheader={<ListSubheader component="div">Registro de Coupons</ListSubheader>}
            >
              {
                couponRegistry.map(coupon => <Coupons {...coupon} />)
              }
            </List>
        </div>
    );
  }
}

ListCoupons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListCoupons);
