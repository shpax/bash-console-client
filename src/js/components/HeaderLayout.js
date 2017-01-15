import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar'

export default class HeaderLayout extends React.Component {

    constructor(props) {
        super();
        this.state = {
            drawerOpened: false
        }
    }

    onLeftIconButtonTouchTap() {
        const drawerOpened = !this.state.drawerOpened;
        this.setState({
            ...this.state,
            drawerOpened
        })
    }

    render() {

        const { drawerOpened } = this.state;

        return (
            <div>
                <AppBar title={this.props.title} onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap.bind(this)}/>
                <Drawer open={drawerOpened}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
}