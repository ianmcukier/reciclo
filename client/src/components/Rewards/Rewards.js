import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/StarBorderOutlined';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '90%',
    margin: '0 auto',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    /* padding: theme.spacing.unit * 2, */
    marginTop: '2em',
    marginBottom: '2em',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  subtitle: {
    fontSize: '1.5em'
  },
  price: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
    width: '4.2em',
    float: 'right',
    fontSize: '1.4em'
    
  }
});


const RewardsGridList = props => {
  const { classes, coupons } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} />
        {coupons.map(coupon => (
          <GridListTile key={coupon.img}>
            <img src={coupon.img} alt={coupon.title} />
            <GridListTileBar
              title={coupon.title}
              subtitle={(
                <React.Fragment>
                  <span className={classes.subtitle}>{coupon.exchange} de desconto</span>
                </React.Fragment>
              )}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

RewardsGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RewardsGridList);
