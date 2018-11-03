import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Menu = ({ title }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        { title }
      </Typography>
    </Toolbar>
  </AppBar>
);

Menu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Menu;
