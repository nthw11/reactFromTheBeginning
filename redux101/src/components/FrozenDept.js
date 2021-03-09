import React, { Component } from 'react';

//we want this component to know about redux.
//to do that we need some help (or some glue)
//the glue is react-redux. we need the connect function
//this is how a component knows about redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateFrozen from '../actions/frozenInvUpdate';

class FrozenDept extends Component {
  increment = (operation, index) => {
    // console.log(operation, index);
    this.props.updateFrozen(operation, index);
  };
  render() {
    const frozenInventory = this.props.frozenData.map((item, i) => {
      return (
        <div key={i}>
          <li>
            {item.food}: {item.quantity}
          </li>
          <input
            type='button'
            onClick={() => {
              this.increment('+', i);
            }}
            value='+'
          />
          <input
            type='button'
            onClick={() => {
              this.increment('-', i);
            }}
            value='-'
          />
        </div>
      );
    });
    return (
      <div>
        <h1>Frozen Food Dept</h1>
        <ul>{frozenInventory}</ul>
      </div>
    );
  }
}

//mapStateToProps takes one arg: state, and that is the rootReducer/Store
function mapStateToProps(state) {
  //mapStateToProps return an object with:
  //property is the local prop name to this component
  //the value will be the property in the rootReduer, ie a piece of the store
  return {
    frozenData: state.frozen,
  };
}
//mapdispatch to props is how we tie our component to the dispatch
//takes 1 arg: dispatch
function mapDispatchToProps(dispatch) {
  //this function returns bindActionCreators and we hand bindActionCreators an object:
  //each property will be a local prop
  //each value will be a function that is dispatch when run
  //2nd arg for bindActionCreators is the dispatch
  return bindActionCreators(
    {
      updateFrozen: updateFrozen,
    },
    dispatch
  );
}

//connect takes 2 args: the first one is a function that is going to map a piece of redux state to this component's props
//2nd arg to connect: mapDispatchToProps
// export default FrozenDept;
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);
