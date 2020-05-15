import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurf} from '../store/action/index';

const Smurfs = props => {
    // console.log({props})
    useEffect(() => {
        props.fetchSmurf();
    }, [props.fetchSmurf])
console.log(props.smurf)
    return (
        <div>
            <h1>hello</h1>
            {props.isFetching && <h3>Fetching data...</h3>}
    {props.smurf.map( card => (<div> <h2>{card.name}</h2>  
    <h3>{card.age}</h3>
    <h3>{card.height}</h3>
</div>
  ))}
        </div>
    );
};

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    smurf: state.smurf,
    error: state.error,
})

export default connect(mapStateToProps, {fetchSmurf}) (Smurfs);