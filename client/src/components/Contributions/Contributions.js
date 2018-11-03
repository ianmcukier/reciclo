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
    const { classes,name, metric, quantity, type, date} = props;
    const months =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formatDate = new Date(date);
        return (
            <div className={classes.root}>
                <ListItemText classes={{secondary: props.classes.secondary}}
                primary={"Você reciclou " + quantity +" "+ metric + " de lixo " + type}
                secondary={"Em " + name + " - " + months[formatDate.getMonth()] + " " + formatDate.getDate() + ", "+ formatDate.getFullYear()}
                 />
            </div>
        );
    }

Contributions.propTypes = {

};

export default withStyles(styles)(Contributions);
