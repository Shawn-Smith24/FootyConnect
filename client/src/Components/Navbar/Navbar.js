import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles'
import soccerBall from '../../images/soccerBall.jpeg';


export const Navbar = () => {
    const classes = useStyles();

  return (
     <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Footy Connect</Typography>
        <img className={classes.image} src={soccerBall} alt="icon" height="60" />
      </AppBar>
  )
}

