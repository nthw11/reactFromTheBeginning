//all reducers have 2 params:
//1: they have the current state, use provide a default state
//2: info from any action
const seedData = [
  {
    food: 'Bread',
    quantity: 15,
  },
  {
    food: 'Rolls',
    quantity: 48,
  },
  {
    food: 'Cookies',
    quantity: 24,
  },
  {
    food: 'Pies',
    quantity: 2,
  },
];
export default (state = seedData, action) => {
  if (action.type === 'updateBakery') {
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
