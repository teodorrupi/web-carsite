/**
 * Created by teodor on 07/08/17.
 */

// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = createStyleSheet({
    root: {
        width: '100%',
        backgroundColor: 'white'
    },
    flex: {
        flex: 1,
    },
    color:{
        color: 'white'
    },
    buttonColor:{
        color: '#1e88e5'
    }
});

function ButtonAppBar(props) {
    const classes = props.classes;
    return (
        <div className={classes.root}>
            <AppBar position="static" color={'inherit'}>
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        Title
                    </Typography>
                    <Button color="primary">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);