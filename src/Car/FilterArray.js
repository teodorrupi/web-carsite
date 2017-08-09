/**
 * Created by teodor on 08/08/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class FilterArray extends Component {
    state = {
        chipData: this.props.chipData,
    };

    styles = {
        chip: {
            margin: 4,
        },
        wrapper: {
            display: 'flex',
            flexWrap: 'wrap',
        },
    };

    handleRequestDelete = data => () => {
        if (data.label === 'ReactJS') {
            alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
            return;
        }

        const chipData = [...this.state.chipData];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.setState({ chipData });
    };

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.row}>
                {this.state.chipData.map(data => {
                    return (
                        <Chip
                            label={data.label}
                            key={data.key}
                            onRequestDelete={this.handleRequestDelete(data)}
                            className={classes.chip}
                        />
                    );
                })}
            </div>
        );
    }
}

FilterArray.propTypes = {
    classes: PropTypes.object.isRequired,
    chipData: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired).isRequired
};

export default withStyles(styleSheet)(FilterArray);