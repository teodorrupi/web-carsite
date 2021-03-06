/**
 * Created by teodor on 08/08/17.
 */
import React, { Component, PropTypes } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

const styleSheet = createStyleSheet(theme => ({
    chip: {
        margin: theme.spacing.unit / 2,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
}));

const FilterArray = ({ classes, filters, handleDelete}) => {
    return (
        <div className={classes.row}>
            {filters.map(filter => {
                return (
                    <Chip className={classes.chip} key={filter.key} label={filter.label} onRequestDelete={() => handleDelete(filter)}/>
                );
            })}
        </div>
    );
};

FilterArray.propTypes = {
    classes: PropTypes.object.isRequired,
    filters: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default withStyles(styleSheet)(FilterArray);