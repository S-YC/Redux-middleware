import { createAction, handleActions } from "redux-actions"

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => dispatch => {
        setTimeout(() => {
            dispatch(increase())
        }, 1000)
}

export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease())
    }, 1000)    





    
};

const initalState = 0; //객체값이 아닌 숫자도 잘 작동합니다.

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initalState
);

export default counter
