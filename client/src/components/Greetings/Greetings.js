import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    paddingTop: `${theme.spacing.unit * 6}px`,
  },
  points: {
    fontSize: "1.5em",
    color: '#3f51b5',
  }
});

function LetterAvatars(props) {
  const { classes, user } = props;
  return (
    <div className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Bem vindo, {user.name}!
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        Você possui <span className={classes.points}>{user.points}</span> pontos. Troque agora seus pontos por cupons!
      </Typography>
    </div>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);
