/**
 * Created by teodor on 08/08/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import SimpleCard from './SimpleCard';

const styleSheet = createStyleSheet(theme => ({
    root: {
        width: '100%',
        // maxWidth: '360px',
        background: theme.palette.background.paper,
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
    contentItem: {
        textAlign: 'left',
        display: 'block',
    },
    imageBlock: {
        maxHeight: '135px'
    }
}));

function ListDividers(props) {
    const classes = props.classes;
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <List className={classes.root}>
            <ListItem className={classes.contentItem}>
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className="imageBlock">
                            <img className="img-responsive" src="https://i.ebayimg.com/00/s/MTIwMVgxNjAw/z/w6YAAOSwax5Y0Ubi/$_20.jpg" alt="Opel Zafira A Comfort*LM*Iso*Temp*Dachr*MFL*EFH*TÜV "/>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <Typography type="title" component="h3">
                                    Renault Twingo 1.2
                                </Typography>
                            </div>
                            <div className="col-md-4" style={{textAlign: 'right'}}>
                                2.999
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-hidden">
                                <div className="rbt-regMilPow">EZ 02/2001, 182.000&nbsp;km, 100&nbsp;kW&nbsp;(136&nbsp;PS)</div>
                                <div>Kombi, <b>Unfallfrei</b>, Diesel, Schaltgetriebe, HU 05/2018, 4/5 Türen</div>
                                ≈ 5,9 l/100km (komb.), ≈ 156 g CO₂/km (komb.)
                            </div>
                        </div>
                    </div>
                </div>
            </ListItem>
            <Divider />
            <ListItem className={classes.contentItem}>
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className="imageBlock">
                            <img className="img-responsive" src="https://i.ebayimg.com/00/s/MTIwMVgxNjAw/z/w6YAAOSwax5Y0Ubi/$_20.jpg" alt="Opel Zafira A Comfort*LM*Iso*Temp*Dachr*MFL*EFH*TÜV "/>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <Typography type="title" component="h3">
                                    Renault Twingo 1.2
                                </Typography>
                            </div>
                            <div className="col-md-4" style={{textAlign: 'right'}}>
                                2.999
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-hidden">
                                <div className="rbt-regMilPow">EZ 02/2001, 182.000&nbsp;km, 100&nbsp;kW&nbsp;(136&nbsp;PS)</div>
                                <div>Kombi, <b>Unfallfrei</b>, Diesel, Schaltgetriebe, HU 05/2018, 4/5 Türen</div>
                                ≈ 5,9 l/100km (komb.), ≈ 156 g CO₂/km (komb.)
                            </div>
                        </div>
                    </div>
                </div>
            </ListItem>
            <Divider />
            <ListItem className={classes.contentItem}>
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className="imageBlock">
                            <img className="img-responsive" src="https://i.ebayimg.com/00/s/MTIwMVgxNjAw/z/w6YAAOSwax5Y0Ubi/$_20.jpg" alt="Opel Zafira A Comfort*LM*Iso*Temp*Dachr*MFL*EFH*TÜV "/>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <Typography type="title" component="h3">
                                    Renault Twingo 1.2
                                </Typography>
                            </div>
                            <div className="col-md-4" style={{textAlign: 'right'}}>
                                2.999
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-hidden">
                                <div className="rbt-regMilPow">EZ 02/2001, 182.000&nbsp;km, 100&nbsp;kW&nbsp;(136&nbsp;PS)</div>
                                <div>Kombi, <b>Unfallfrei</b>, Diesel, Schaltgetriebe, HU 05/2018, 4/5 Türen</div>
                                ≈ 5,9 l/100km (komb.), ≈ 156 g CO₂/km (komb.)
                            </div>
                        </div>
                    </div>
                </div>
            </ListItem>
            <Divider />
            <ListItem className={classes.contentItem}>
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className="imageBlock">
                            <img className="img-responsive" src="https://i.ebayimg.com/00/s/MTIwMVgxNjAw/z/w6YAAOSwax5Y0Ubi/$_20.jpg" alt="Opel Zafira A Comfort*LM*Iso*Temp*Dachr*MFL*EFH*TÜV "/>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <Typography type="title" component="h3">
                                    Renault Twingo 1.2
                                </Typography>
                            </div>
                            <div className="col-md-4" style={{textAlign: 'right'}}>
                                2.999
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-hidden">
                                <div className="rbt-regMilPow">EZ 02/2001, 182.000&nbsp;km, 100&nbsp;kW&nbsp;(136&nbsp;PS)</div>
                                <div>Kombi, <b>Unfallfrei</b>, Diesel, Schaltgetriebe, HU 05/2018, 4/5 Türen</div>
                                ≈ 5,9 l/100km (komb.), ≈ 156 g CO₂/km (komb.)
                            </div>
                        </div>
                    </div>
                </div>
            </ListItem>
            <Divider />
            <ListItem className={classes.contentItem}>
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className="imageBlock">
                            <img className="img-responsive" src="https://i.ebayimg.com/00/s/MTIwMVgxNjAw/z/w6YAAOSwax5Y0Ubi/$_20.jpg" alt="Opel Zafira A Comfort*LM*Iso*Temp*Dachr*MFL*EFH*TÜV "/>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <Typography type="title" component="h3">
                                    Renault Twingo 1.2
                                </Typography>
                            </div>
                            <div className="col-md-4" style={{textAlign: 'right'}}>
                                2.999
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-hidden">
                                <div className="rbt-regMilPow">EZ 02/2001, 182.000&nbsp;km, 100&nbsp;kW&nbsp;(136&nbsp;PS)</div>
                                <div>Kombi, <b>Unfallfrei</b>, Diesel, Schaltgetriebe, HU 05/2018, 4/5 Türen</div>
                                ≈ 5,9 l/100km (komb.), ≈ 156 g CO₂/km (komb.)
                            </div>
                        </div>
                    </div>
                </div>
            </ListItem>
            <Divider />
            <ListItem className={classes.contentItem}>
                <Typography type="body1" className={classes.title}>
                    Word of the Day
                </Typography>
                <Typography type="headline" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography type="body1" className={classes.pos}>
                    adjective
                </Typography>
                <Typography component="p">
                    well meaning and kindly.<br />
                    {'"a benevolent smile"'}
                </Typography>
            </ListItem>
        </List>
    );
}

ListDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ListDividers);