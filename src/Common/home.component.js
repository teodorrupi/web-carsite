import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SimpleCard from '../Car/SimpleCard';
import FullWidthGrid from '../Car/FullWidthGrid';
import HomeGrid from '../Car/HomeGrid';
import FilterDrawer from '../components/FilterDrawer';
import FilterGrid from '../Car/FilterGrid';
import DividedList from '../Car/DividedList';
import StandingFilter from '../Car/StandingFilter';
import {getResults, addFilter, removeFilter} from '../actions'

import Grid from 'material-ui/Grid';

class Home extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getResults())
    }

    handleDelete = (filter) => {
        const { dispatch } = this.props;
        dispatch(removeFilter(filter.key))
    }

    handleAdd = (filter) => {
        const { dispatch } = this.props;
        dispatch(addFilter(filter))
    }

    render(){
        const { active} = this.props;
        const homeStructure = (
            <div>
                <FilterGrid/>
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12"><FilterDrawer filters={active}/></div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-sm-4 dist-sm"><StandingFilter/></div>
                    <div className="col-lg-10 col-md-12 col-sm-12"><HomeGrid/></div>
                </div>
                <HomeGrid/>
                <DividedList/>
                <FullWidthGrid/>
            </div>
        )
        return (
            <div>
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <FilterDrawer filters={active} removeFilter={this.handleDelete} addFilter={this.handleAdd}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <HomeGrid/></div>
                </div>
            </div>
        );
    }
}



Home.propTypes = {
    active: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired).isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { filters } = state;
    const { isFetching, isAdding, isRemoving, active} = filters || {
        isFetching: false,
        isAdding: false,
        isRemoving: false,
        active: []
    }
    return {
        isFetching,
        isAdding,
        isRemoving,
        active
    }
}

export default connect(mapStateToProps)(Home);