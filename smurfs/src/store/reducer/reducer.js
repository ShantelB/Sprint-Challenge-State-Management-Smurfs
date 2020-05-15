import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE} from '../action/index';

const initialState = {
    isFetching: false,
    smurf:[],
    error: '',
}

export const reducer = (state = initialState, action) => {
    // console.log(state)
    switch(action.type){
        case FETCH_SMURF_START:
        return {
            ...state,
            isFetching:true
        };
        case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                isFetching:false,
                smurf:action.payload,   
            }; 
            case FETCH_SMURF_FAILURE:
                return {
                    ...state,
                    isFetching:false,
                    error:action.payload
                }
                case ADD_SMURF_START:
                     return {
                        ...state,
                     isFetching:true
        };
                    case ADD_SMURF_SUCCESS:
                         return{
                          ...state,
                           isFetching:false,
                             smurf:action.payload,   
            }; 
                     case ADD_SMURF_FAILURE:
                         return {
                      ...state,
                      isFetching:false,
                     error:action.payload
                }
                default:
                    return state
    }
}