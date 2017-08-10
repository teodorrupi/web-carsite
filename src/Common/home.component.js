import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SimpleCard from '../Car/SimpleCard';
import FullWidthGrid from '../Car/FullWidthGrid';
import HomeGrid from '../Car/HomeGrid';
import FilterDrawer from '../Car/FilterDrawer';
import FilterGrid from '../Car/FilterGrid';
import DividedList from '../Car/DividedList';
import StandingFilter from '../Car/StandingFilter';
import Grid from 'material-ui/Grid';
import {
    ResponsiveDrawer,
    ResponsiveAppBar,
    BodyContainer,
    toggleDrawerOpen,
    toggleDrawerDock,
    setResponsive
} from 'material-ui-responsive-drawer'



class Home extends Component {

    render(){

        return (
            <div>
                {/*<FilterGrid/>*/}
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12"><FilterDrawer filters={[
                        { key: 0, label: 'Angular' },
                        { key: 1, label: 'JQuery' },
                        { key: 2, label: 'Polymer' },
                        { key: 3, label: 'ReactJS' },
                        { key: 4, label: 'Vue.js' },
                    ]}/></div>
                    </div>
                <div className="row">
                    {/*<div className="col-md-2 col-sm-4 dist-sm"><StandingFilter/></div>*/}
                    <div className="col-lg-10 col-md-12 col-sm-12"><HomeGrid/></div>
                </div>

                {/*<HomeGrid/>*/}
                {/*<DividedList/>*/}
                {/*<FullWidthGrid/>*/}
            </div>
        );
    }
}



Home.propTypes = {
    toggleDrawerOpen: PropTypes.func.isRequired,
    toggleDrawerDock: PropTypes.func.isRequired,
    setResponsive: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const {  browser, responsiveDrawer } = state;
    return {
        browser,
        responsiveDrawer
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        toggleDrawerOpen: () => {
            dispatch(toggleDrawerOpen());
        },
        toggleDrawerDock: () => {
            dispatch(toggleDrawerDock());
        },
        setResponsive: (isResponsive) => {
            dispatch(setResponsive(isResponsive));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);