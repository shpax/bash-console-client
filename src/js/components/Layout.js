import React from 'react'
import { connect } from 'react-redux'
import HeaderLayout from './HeaderLayout'

@connect((store) => {
    const { user_id } = store.user;
    return {
        user_id
    }
})
export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <HeaderLayout title={`User ${this.props.user_id}`}/>
            </div>
        )
    }

}