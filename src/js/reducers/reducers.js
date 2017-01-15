import { combineReducers } from 'redux'

import bash from './bashReducer'
import user from './userReducer'

export default combineReducers({ bash, user });