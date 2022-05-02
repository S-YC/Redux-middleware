import { combineReducers } from 'redux'
import counter from './counter'
import sample from './sample'
import loading from './loading';

// 루트 리듀서 작성
const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

export default rootReducer;

