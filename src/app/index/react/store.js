import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};
const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

export default finalCreateStore(rootReducer, initialState);
