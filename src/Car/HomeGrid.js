/**
 * Created by teodor on 07/08/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import SimpleCard from './SimpleCard';
import DividedList from './DividedList';

const styleSheet = createStyleSheet(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
    },
    paper: {
        // padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function HomeGrid(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    {/*<SimpleCard/>*/}
                    <Paper className={classes.paper}>
                        <DividedList/>
                    </Paper>
                </Grid>
                {/*<Grid item xs={12} sm={6}>*/}
                    {/*<SimpleCard/>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={6}>*/}
                {/*</Grid>*/}
            </Grid>
        </div>
    );
}

HomeGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(HomeGrid);