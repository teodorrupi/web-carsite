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

const InputSelector = ({classes, label, options, handleChange}) => {
    return(
        <div className={classes.customSelectGroup}>
            <label htmlFor="insel" className={classes.label}>{label}</label>
            <input type="text" name={props.label} list="props" id="insel" onChange={handleChange}/>
            <datalist id="props">
                {options.map(option =>
                    <option id={option.id} value={option.value}>{option.label}</option>
                )}
            </datalist>
        </div>
    )
}

InputSelector.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired).isRequired

};

export default withStyles(styleSheet)(InputSelector);