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

function SimpleTable(props) {
  const { classes } = props;

  const fakeRegistry = [
    {
      type: 'Contribuição',
      name: 'Botafogo II',
      date: '10/10/2018',
      points: 40,
    },
    {
      type: 'Compra de Cupom',
      name: 'Cinemark',
      date: '15/10/2018',
      points: 50,
    },
    {
      type: 'Contribuição',
      name: 'Botafogo I',
      date: '01/11/2018',
      points: 30,
    },
  ]

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Local</TableCell>
            <TableCell numeric>Pontos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeRegistry.map(n => {
            return (
              <TableRow key={n.name}>
                <TableCell component="th" scope="row">
                  {n.date}
                </TableCell>
                <TableCell>
                  {n.type}
                </TableCell>
                <TableCell>
                  {n.name}
                </TableCell>
                <TableCell
                  className={
                    n.type === 'Contribuição'
                      ? classes.positive
                      : classes.negative
                  }
                  numeric
                >
                  {
                    n.type === 'Contribuição'
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
