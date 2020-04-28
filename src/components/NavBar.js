import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class NavBar extends Component {
    render() {
        const { classes } = this.props;

        return(
        <>
        <AppBar className={classes.NavColor} position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" component="p">
                    <Link to="/">
                        Battleship
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </>
        )
    }
}

export default withStyles({
    NavColor: {
        backgroundColor: 'black',
        position: 'fixed',
        fontFamily: 'monospace', 
        color: 'green',
        display: 'flex',
        }
    }) (NavBar);

