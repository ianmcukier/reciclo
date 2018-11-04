import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'green',
  },
  grow: {
    flexGrow: 1,
  },
  menuColor: {
    backgroundColor: "#3F51B5", /* blue */
  }
};


const Menu = ({
  title,
  classes,
  toggleSidebar,
  sidebarOpen,
  routes,
}) => {

  const renderList = elements => (
    <List>
    {elements.map((e, index) => (
      <ListItem button key={e.name} onClick={e.handler}>
        <ListItemText primary={e.name} />
      </ListItem>
    ))}
    </List>
  );

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem>
          <Avatar className={classes.orangeAvatar}>R</Avatar>
          <ListItemText primary="Rubens" />
        </ListItem>
      </List>
      {renderList(routes.top)}
      <Divider />
      {renderList(routes.bottom)}
    </div>
  );

  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.menuColor}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          { title }
        </Typography>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer anchor="right" open={sidebarOpen} onClose={toggleSidebar}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleSidebar}
        onKeyDown={toggleSidebar}
      >
        {sideList}
      </div>
    </Drawer>
  </div>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Menu);
