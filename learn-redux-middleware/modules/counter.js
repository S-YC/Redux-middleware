import { createAction, hanldeAction } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initalState = 0;

const counter = hanldeAction(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initalState
);

export default counter
