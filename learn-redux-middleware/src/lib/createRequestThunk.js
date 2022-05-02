import { startLoading, finishLoading } from "../modules/loading"

export default function createRequestThunk(type, request){
    // 성공 및 실패 액션타입 정의
    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`
    return parms => async dispatch => {
        dispatch({ type }) //시작
        try {
            const response = await request(parms)
            dispatch({
                type: SUCCESS,
                payload: response.data
            }) // 성공
            dispatch(finishLoading(type))
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true 
            }) // 에러
            dispatch(startLoading(true))
            throw e 
        }
    }
}

// 사용법: createRequestThunk('GET_USERS', api, getUSers)