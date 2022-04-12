import { combineReducers } from 'redux';
import counter from './counter';

// 루트 리듀서 작성
const rootReducer = combineReducers({
    counter
});

export default rootReducer;

