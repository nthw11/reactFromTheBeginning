import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clearInventory from '../actions/clearInventory';

class Main extends Component {
  // clearInventoryAction = () =>{
  //   this.props.clearInventory()
  // }
  render() {
    const frozenQuantity = this.props.frozenData.reduce(
      (accum, frozenItem) => accum + frozenItem.quantity,
      0
    );
    const produceQuantity = this.props.produceData.reduce(
      (accum, produceItem) => accum + produceItem.quantity,
      0
    );
    const bakeryQuantity = this.props.bakeryData.reduce(
      (accum, bakeryItem) => accum + bakeryItem.quantity,
      0
    );
    return (
      <div>
        <h2>Frozen Department: {frozenQuantity}</h2>
        <h2>Produce Department: {produceQuantity} </h2>
        <h2>Bakery Department: {bakeryQuantity}</h2>
        <button onClick={this.props.clearInventory}>
          Clear all inventory!!!
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
    produceData: state.produce,
    bakeryData: state.bakery,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clearInventory: clearInventory,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
