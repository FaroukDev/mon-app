/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  des: {
    width: 140,
    textAlin: 'center',
  },
  myId: {
    width: 90,
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  console.log('SimpleTable: ', props.persos);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Comics</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.persos.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" className={classes.myId}>
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell className={classes.des}>{row.description}</TableCell>
              <TableCell>{row.modified}</TableCell>
              <TableCell>{row.comics.available}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
