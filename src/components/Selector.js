/**
 * Created by teodor on 07/08/17.
 */
import React, { Component, PropTypes } from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles';


const styleSheet = createStyleSheet(theme => ({
    customSelect: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    customSelectGroup: {
        width: "100%",
    },
    label: {
        marginBottom: 4,
        lineHeight: 1
    }
}));

const Selector = ({classes, label, options, handleChange}) => {
    return(
        <div className={classes.customSelectGroup}>
            <label htmlFor="sel1" className={classes.label}>{label}</label>
            <select className="form-control customSelect" id="sel1" onChange={handleChange}>
                <option id="0" value="none" selected="selected" disabled="disabled">-</option>
                {options.map(option =>
                    <option id={option.id} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
    )
}

Selector.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired).isRequired

};

export default withStyles(styleSheet)(Selector);