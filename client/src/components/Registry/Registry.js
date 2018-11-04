import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '70%',
    overflowX: 'auto',
    margin: '2em auto',
  },
  table: {
    minWidth: 700,
  },
  negative: {
    color: 'red',
  },
  positive: {
    color: 'green',
  }
};


function formatDate(date) {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

function SimpleTable(props) {
  const { classes, statement } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Local</TableCell>
            <TableCell numeric>Pontos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statement.map(n => {
            return (
              <TableRow key={n.name}>
                <TableCell component="th" scope="row">
                  {formatDate(n.date)}
                </TableCell>
                <TableCell>
                  {n.name}
                </TableCell>
                <TableCell
                  className={
                    n.type === 'item'
                      ? classes.positive
                      : classes.negative
                  }
                  numeric
                >
                  {
                    n.type === 'item'
                      ? `+${n.points}`
                      : -1*n.points
                  }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
