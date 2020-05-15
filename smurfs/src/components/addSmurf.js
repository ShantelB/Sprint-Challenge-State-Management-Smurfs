import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addSmurf, fetchSmurf} from '../store/action/index';

const AddSmurfs = props => {
    console.log({props})

    // useEffect(() => {
    //     props.addSmurf();
    // }, [props.addSmurf])
    

    const [smurfies, setSmurfies] = useState({
        name: '',
        height:'',
        age:'',
    })

    const change = event => {
        setSmurfies({...smurfies, [event.target.name]: event.target.value});
    };

   const submitSmurf = event => {
        event.preventDefault();
        props.addSmurf(smurfies);
        setSmurfies({
            name: '',
            height:'',
            age:'',
        });
        props.fetchSmurf()
    };
  
  return (
      <div>
          
          <form onSubmit={submitSmurf}>
          <input onChange= {change} type= 'text' name= 'name' value={smurfies.name} />
          <input onChange= {change} type= 'text' name= 'height' value={smurfies.height} />
          <input onChange= {change} type= 'text' name= 'age' value={smurfies.age} />
        
          <button>Add</button>
        </form>

      </div>
  )
};

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    smurf: state.smurf,
    error: state.error,
})

export default connect(mapStateToProps, {addSmurf, fetchSmurf}) (AddSmurfs);