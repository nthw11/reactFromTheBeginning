/* eslint-disable import/no-anonymous-default-export */
//all reducers have 2 params:
//1: they have the current state, use provide a default state
//2: info from any action
const seedData = [
  {
    food: 'TV dinners',
    quantity: 10,
  },
  {
    food: 'Frozen Veggies',
    quantity: 21,
  },
  {
    food: 'Frozen Pizzas',
    quantity: 25,
  },
];
export default (state = seedData, action) => {
  console.log('frozen reducer is running');
  console.log(action);
  if (action.type === 'updateFrozen') {
    console.log('frozen reducer cares!');
    //make a copy of state because we never mutate state
    let newState = [...state];
    if (action.payload.operation === '+') {
      newState[action.payload.index].quantity++;
    } else if (action.payload.operation === '-') {
      newState[action.payload.index].quantity--;
    }
    return newState;
  } else if (action.type === 'clearInventory') {
    let newState = [...state];
    newState.forEach((item, i) => {
      item.quantity = 0;
    });
    return newState;
  } else {
    return state;
  }
};
