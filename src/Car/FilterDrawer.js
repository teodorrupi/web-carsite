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
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
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
    customListItem: {
        paddingTop: 5,
        paddingBottom: 5
    },
    dividerSpace: {
        marginTop: 10,
        marginBottom: 10
    }
}));

class FilterDrawer extends Component {
    state = {
        open: {
            top: false,
            left: false,
            bottom: false,
            right: false,
        },
    };

    toggleDrawer = (side, open) => {
        const drawerState = {};
        drawerState[side] = open;
        this.setState({ open: drawerState });
    };

    handleTopOpen = () => this.toggleDrawer('top', true);
    handleTopClose = () => this.toggleDrawer('top', false);
    handleLeftOpen = () => this.toggleDrawer('left', true);
    handleLeftClose = () => this.toggleDrawer('left', false);
    handleBottomOpen = () => this.toggleDrawer('bottom', true);
    handleBottomClose = () => this.toggleDrawer('bottom', false);
    handleRightOpen = () => this.toggleDrawer('right', true);
    handleRightClose = () => this.toggleDrawer('right', false);

    render() {
        const classes = this.props.classes;

        const mailFolderListItems = (
            <div>
                <ListItem className={classes.customListItem}>
                    <Selector label="Marka" options={[{value: "X", text: "X"}]}/>
                </ListItem>
                <ListItem className={classes.customListItem}>
                    <div className="row full-width">
                        <div className="col-md-6 col-sm-6 col-filter">
                            <Selector label="Marka" options={[{value: "X", text: "X"}]}/>
                        </div>
                        <div className="col-md-6 col-sm-6 col-filter">
                            <Selector label="Marka" options={[{value: "X", text: "X"}]}/>
                        </div>
                    </div>
                </ListItem>
                <Divider className={classes.dividerSpace}/>
                <ListItem className={classes.customListItem}>
                    <Selector label="Marka" options={[{value: "X", text: "X"}]}/>
                </ListItem>
                <ListItem className={classes.customListItem}>
                    <Selector label="Marka" options={[{value: "X", text: "X"}]}/>
                </ListItem>
                <Divider className={classes.dividerSpace}/>
                <ListItem className={classes.customListItem}>
                    <Selector label="Marka" options={[{value: "X", text: "X"}]}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Kerko" />
                </ListItem>
            </div>
        );

        const otherMailFolderListItems = (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="All mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ReportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Spam" />
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

        const fullList = (
            <div>
                <List className={classes.listFull} disablePadding>
                    {mailFolderListItems}
                </List>
                <Divider />
                <List className={classes.listFull} disablePadding>
                    {otherMailFolderListItems}
                </List>

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
                            <Button dense onClick={this.handleRightOpen}>Filtro</Button>
                        </div>
                    </div>
                    <div className="row padded-row-bottom">
                        <div className="col-md-12">
                            <FilterArray chipData={this.props.filters.active}/>
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
    classes: PropTypes.object.isRequired,
    filters: PropTypes.object(PropTypes.shape({
        active: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired).isRequired
        // brand: PropTypes.arrayOf(PropTypes.shape({
        //     key: PropTypes.string.isRequired,
        //     label: PropTypes.string.isRequired,
        // }).isRequired).isRequired,
        // brand: PropTypes.arrayOf(PropTypes.shape({
        //     key: PropTypes.string.isRequired,
        //     label: PropTypes.string.isRequired,
        // }).isRequired).isRequired,
    }).isRequired).isRequired
};

export default withStyles(styleSheet)(FilterDrawer);