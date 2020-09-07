import { createStore, applyMiddleware } from 'redux';
import rootReducers from './index';
import thunk from 'redux-thunk';

export default function configStore() {
    return createStore(rootReducers, applyMiddleware(thunk));
}