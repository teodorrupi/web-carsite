import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes'
import configureStore from './configureStore'
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import { MuiThemeProvider } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';
// import common from 'material-ui/colors/common';

const store = configureStore();
injectTapEventPlugin();

const theme = createMuiTheme({
    palette: createPalette({
        primary: blueGrey,
        // primary: common
    })

});

render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router routes={routes} history={hashHistory}/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('container')
);
