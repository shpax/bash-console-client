import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Layout from './components/Layout'
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin'
const app = document.getElementById('app');

injectTapEventPlugin();

ReactDOM.render(<Provider store={store}>
        <MuiThemeProvider>
            <Layout/>
        </MuiThemeProvider>
    </Provider>, app);