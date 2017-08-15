/**
 * Created by teodor on 08/08/17.
 */
import React, { Component, PropTypes } from 'react';
// import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Selector from "./Selector"
import FilterArray from "./FilterArray"
import Paper from 'material-ui/Paper';


const styleSheet = createStyleSheet(theme => ({
    list: {
        width: 250,
        flex: 'initial',
    },
    listFull: {
        width: 'auto',
        flex: 'initial',
    },
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
    paper: {
        marginTop: 20,
        // textAlign: 'center',
        paddingLeft: 16,
        paddingRight: 15,
        color: theme.palette.text.secondary,
    },
    sponsor: {
        position: 'static',
        height:'10%',
        bottom:'0',
        textAlign: 'center'
    },
    header: {
        textAlign: 'center'
    },
    drawerWrapper: {
        height: '90%',
        overflowY: 'scroll'
    },
    // customListItem: {
    //     paddingTop: 5,
    //     paddingBottom: 5
    // },
    dividerSpace: {
        marginTop: 10,
        marginBottom: 10
    }
}));

const brands = [
    {key: 11, label: 'Mercedes Benz', type:'brand', value: 'Mercedes Benz'},
    {key: 12, label: 'Volkswagen', type:'brand', value: 'Volkswagen'}]

const year = [
    {id: 21, value: '2017', label: '2017'},
    {id: 22, value: '2016', label: '2016'},
    {id: 23, value: '2015', label: '2015'},
    {id: 24, value: '2014', label: '2014'},]

const price = [
    {id: 31, value: '10.000', label: '10.000€'},
    {id: 32, value: '9.000', label: '9.000€'},
    {id: 33, value: '8.000', label: '8.000€'},
    {id: 34, value: '7.000', label: '7.000€'},]

class FilterDrawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: {
                top: false,
                left: false,
                bottom: false,
                right: false,
        }}
    }

    toggleDrawer = (side, open) => {
        const drawerState = {};
        drawerState[side] = open;
        this.setState({ open: drawerState });
    };

    handleDelete = (filter) => {
        const { removeFilter } = this.props;
        removeFilter(filter);
    }

    handleChange = (filter, type) => {
        const { addFilter } = this.props;
        addFilter(filter, type);
    }

    handleRightOpen = () => this.toggleDrawer('right', true);
    handleRightClose = () => this.toggleDrawer('right', false);

    render() {
        const classes = this.props.classes;
        const { filters} = this.props;

        const mailFolderListItems = (
            <div>
                <ListItem className={classes.customListItem}>
                    <Selector label={"Brand"} filterType={"brand"} options={brands} handleChange={this.handleChange} active={filters.filter(ft=>ft.type=='brand')[0]} />
                </ListItem>
                <ListItem className={classes.customListItem}>
                    <div className="row full-width">
                        <div className="col-md-6 col-sm-6 col-filter">
                            {/*<Selector label={"Year from"} options={selects.yearFrom} handleChange={this.handleChange}/>*/}
                        </div>
                        <div className="col-md-6 col-sm-6 col-filter">
                            {/*<Selector label={"To"} options={selects.yearTo} handleChange={this.handleChange}/>*/}
                        </div>
                    </div>
                </ListItem>
                {/*<Divider className={classes.dividerSpace}/>*/}
                {/*Price*/}
                <ListItem className={classes.customListItem}>
                    <div className="row full-width">
                        <div className="col-md-6 col-sm-6 col-filter">
                            {/*<Selector label={"Price from"} options={price} handleChange={this.handleChange}/>*/}
                        </div>
                        <div className="col-md-6 col-sm-6 col-filter">
                            {/*<Selector label={"To"} options={price} handleChange={this.handleChange}/>*/}
                        </div>
                    </div>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Kerko" onClick={this.handleRightClose}/>
                </ListItem>
            </div>
        );

        const sideList = (
            <div>
                <div className={classes.drawerWrapper}>
                    <div className={classes.header}>
                        <h4>Filtro</h4>
                    </div>
                    <List className={classes.list} disablePadding>
                        {mailFolderListItems}
                    </List>
                    {/*<Divider />*/}
                    {/*<List className={classes.list} disablePadding>*/}
                        {/*{otherMailFolderListItems}*/}
                    {/*</List>*/}
                </div>
                <div className={classes.sponsor}>
                    Sponsor
                    <p>Mercedes Benz Albania</p>
                </div>
            </div>
        );

        return (
            <div>
                <Paper className={classes.paper}>
                    <div className="row padded-row-top">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <Typography type="body1" className={classes.title}>
                                2034 rezultate
                            </Typography>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 aligned-right">
                            <Button disableRipple="true" raised color="primary" onClick={this.handleRightOpen}>Filtro</Button>
                        </div>
                    </div>
                    <div className="row padded-row-bottom">
                        <div className="col-md-12">
                            <FilterArray filters={filters} handleDelete={this.handleDelete}/>
                        </div>
                    </div>
                </Paper>
                {/*<Card className={classes.card}>*/}
                    {/*<CardContent>*/}
                        {/**/}
                    {/*</CardContent>*/}
                    {/**/}
                    {/*<CardActions>*/}
                        {/**/}
                    {/*</CardActions>*/}
                {/*</Card>*/}

                <Drawer style={{height: '100%'}}
                    anchor="right"
                    open={this.state.open.right}
                    onRequestClose={this.handleRightClose}

                >
                    {/*onClick={this.handleRightClose}*/}
                    {sideList}
                </Drawer>
            </div>
        );
    }
}

FilterDrawer.propTypes = {
    classes: PropTypes.object,
    filters: PropTypes.array.isRequired,
    removeFilter: PropTypes.func.isRequired,
    addFilter: PropTypes.func.isRequired
};

export default withStyles(styleSheet)(FilterDrawer);