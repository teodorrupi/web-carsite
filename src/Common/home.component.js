import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SimpleCard from '../Car/SimpleCard';
import FullWidthGrid from '../Car/FullWidthGrid';
import HomeGrid from '../Car/HomeGrid';
import FilterDrawer from '../components/FilterDrawer';
import FilterGrid from '../Car/FilterGrid';
import DividedList from '../Car/DividedList';
import StandingFilter from '../Car/StandingFilter';
import {requestResults, addFilter, removeFilter, filterResults} from '../actions'

import Grid from 'material-ui/Grid';

class Home extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(requestResults())
    }

    handleDelete = (filter) => {
        const { dispatch } = this.props;
        dispatch(removeFilter(filter))
        dispatch(filterResults(filter.type))
    }

    handleChange = (filter, type) => {
        const { dispatch } = this.props;
        dispatch(addFilter(filter, type))
        dispatch(filterResults(type))
    }

    render(){
        const { active, list } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <FilterDrawer filters={active} removeFilter={this.handleDelete} addFilter={this.handleChange} results={list}/>
                    </div>
                </div>
                <
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <HomeGrid results={list}/></div>
                </div>
            </div>
        );
    }
}



Home.propTypes = {
    active: PropTypes.array.isRequired,
    list: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { filters, results } = state;
    const { isFetching, isAdding, isRemoving, active} = filters || {
        isFetching: false,
        isAdding: false,
        isRemoving: false,
        active: []
    }

    const { list } = results || {
        list: []
    }

    return {
        isFetching,
        isAdding,
        isRemoving,
        active,
        list
    }
}

export default connect(mapStateToProps)(Home);