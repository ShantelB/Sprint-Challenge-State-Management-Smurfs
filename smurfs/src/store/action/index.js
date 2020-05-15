import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START});

    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        // console.log(response.data)
        dispatch({type: FETCH_SMURF_SUCCESS, payload:response.data})
    })
    .catch(err => dispatch({FETCH_SMURF_FAILURE, payload: `${err.message}`}))
}
}

export const addSmurf = (smurfies) => {
    return dispatch => {
        dispatch({ type: ADD_SMURF_START});

    axios.post('http://localhost:3333/smurfs', smurfies)
    .then(response => {
        // console.log(response.data)
        dispatch({type: ADD_SMURF_SUCCESS, payload:response.data})
    })
    .catch(err => dispatch({ADD_SMURF_FAILURE, payload: `${err.message}`}))
}
}