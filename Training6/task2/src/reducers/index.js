import{combineReducers} from 'redux';
import taskReducer from './task';
import networkReducer from './network';

const rootReducer = combineReducers({
    task: taskReducer,
    network: networkReducer
})

export default rootReducer;