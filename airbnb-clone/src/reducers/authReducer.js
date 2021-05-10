/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  if (action.type === 'REGISTER_ACTION') {
    return action.payload;
  } else if (action.type === 'LOGOUT') {
    return {};
  } else {
    return state;
  }
};
