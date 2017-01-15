import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerLayout extends React.Component {

    render() {
        return (
            <Drawer open={this.state.open}>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
        )
    }
}