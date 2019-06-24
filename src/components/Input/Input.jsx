import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
//import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles =()=> makeStyles({
  root: {
    display: 'flex',
    width: 400,
  },
  input: {
    width:'100%',
    marginLeft: 8,
    flex: 1,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

export default function CustomizedInputBase(callback) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        fullWidth
        className={classes.input}
        placeholder="Hashtag photo search"
        onChange={callback}
        inputProps={{ 'aria-label': 'Search Google Maps' }}
      />
      <Divider className={classes.divider} />
    </Paper>
  );
}
