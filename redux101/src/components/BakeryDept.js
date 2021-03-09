import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateBakery from '../actions/bakeryInvUpdate';

class BakeryDept extends Component {
  increment = (operation, index) => {
    this.props.updateBakery(operation, index);
  };
  render() {
    const bakeryInventory = this.props.bakeryData.map((item, i) => {
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
        <h1>Bakery Dept</h1>
        <ul>{bakeryInventory}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bakeryData: state.bakery,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateBakery: updateBakery,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(BakeryDept);
