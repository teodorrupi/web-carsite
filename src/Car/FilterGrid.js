/**
 * Created by teodor on 07/08/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Selector from '../components/Selector'

const styleSheet = createStyleSheet(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
    },
    paper: {
        padding: 16,
        color: theme.palette.text.primary,
    },

}));

function FilterGrid(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <Grid container spacing={8}>
                {/*<Paper className={classes.paper}>*/}
                    <Grid item xs={12} sm={12} md={6}>
                        <Paper className={classes.paper}>
                            <div className="row">
                                <div className="col-md-6">
                                    <Selector label="Marka"/>
                                </div>
                                <div className="col-md-6">
                                    <Selector label="Modeli"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Selector label="Cmimi deri ne"/>
                                </div>
                                <div className="col-md-6">
                                    <Selector label="Rregjistruar nga"/>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    {/*<Grid item xs={12} sm={12} md={6}>*/}
                        {/*<Paper className={classes.paper}><Selector/></Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6}>*/}
                        {/*/!*<Paper className={classes.paper}><Selector/></Paper>*!/*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6}>*/}
                        {/*/!*<Paper className={classes.paper}><Selector/></Paper>*!/*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6}>*/}
                        {/*<Paper className={classes.paper}><Selector/></Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6}>*/}
                        {/*<Paper className={classes.paper}><Selector/></Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6}>*/}
                        {/*/!*<Paper className={classes.paper}><Selector/></Paper>*!/*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6}>*/}
                        {/*/!*<Paper className={classes.paper}><Selector/></Paper>*!/*/}
                    {/*</Grid>*/}
                {/*</Paper>*/}
            </Grid>
        </div>
    );
}

FilterGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(FilterGrid);