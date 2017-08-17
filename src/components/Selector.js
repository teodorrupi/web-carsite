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

const Selector = ({classes, label, filterType, options, active, handleChange}) => {
    return(
        <div className={classes.customSelectGroup}>
            <label htmlFor="sel1" className={classes.label}>{label}</label>
            <select className="form-control customSelect" id="sel1" value={active.value} onChange={(e) => handleChange(e.target.selectedOptions[0], filterType)}>
                <option id="0" value="none" disabled="disabled">-</option>
                {options.map(option =>
                    <option key={option.key} id={option.key} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
    )
}

Selector.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    filterType: PropTypes.oneOf(['brand', 'yearFrom', 'yearTo']),
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
    }).isRequired).isRequired,
    active: PropTypes.shape({
        key: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
    }).isRequired,
    handleChange: PropTypes.func.isRequired
};

export default withStyles(styleSheet)(Selector);