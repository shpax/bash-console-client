import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers'

const middleware = applyMiddleware(thunk);

export default createStore(reducers, middleware);