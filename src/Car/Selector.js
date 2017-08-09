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

function Selector(props){
    const classes = props.classes;
    const options = props.options;
    return(
        <div className={classes.customSelectGroup}>
            <label htmlFor="sel1" className={classes.label}>{props.label}</label>
            <select className="form-control customSelect" id="sel1">
                {options.map(option =>
                    <option value={option.value}>{option.text}</option>
                )}
            </select>
        </div>
    )
}

Selector.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired

};

export default withStyles(styleSheet)(Selector);