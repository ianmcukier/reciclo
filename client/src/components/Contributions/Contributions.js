import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {

      width: '100%',
      maxWidth: 400,
      backgroundColor: theme.palette.background.paper,
    },
    secondary: {
        textAlign: 'right',
    }
  });


function Contributions(props){
    const { classes } = props;
        return (
            <div className={classes.root}>
                <ListItemText classes={{secondary: props.classes.secondary}}
                primary={props.user + " reciclou " + props.peso + "kg de " + props.lixo}
                secondary={props.data}
                 />
            </div>
        );
    }

Contributions.propTypes = {

};

export default withStyles(styles)(Contributions);
