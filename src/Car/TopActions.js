/**
 * Created by teodor on 08/08/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Selector from "../components/Selector"
import FilterArray from "../components/FilterArray"

const styleSheet = createStyleSheet(theme => ({
    card: {
        minWidth: 275,
        marginTop: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
}));

function TopActions(props) {
    const classes = props.classes;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="body1" className={classes.title}>
                        2034 rezultate
                    </Typography>
                    <FilterArray classes=""/>
                </CardContent>
                <CardActions>
                    <Button dense>Filtro</Button>
                </CardActions>
            </Card>
        </div>
    );
}

TopActions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(TopActions);