import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tile = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     exchange: 'exchange', # % ou R$ de desconto
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function RewardsGridList(props) {
  const { classes, coupons } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">REWARDS</ListSubheader>
        </GridListTile>
        {coupons.map(coupon => (
          <GridListTile key={coupon.img}>
            <img src={coupon.img} alt={coupon.title} />
            <GridListTileBar
              title={coupon.title}
              subtitle={<span>{coupon.exchange} de desconto</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
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
