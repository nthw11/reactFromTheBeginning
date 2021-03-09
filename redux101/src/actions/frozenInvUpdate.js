//this file is an action creator
//action creators return actions
//an action is an object that has (at least) a property of type
//this action creator is going to be handed to the dispatch

export default (operation, index) => {
  console.log(operation, index);
  return {
    type: 'updateFrozen',
    payload: {
      operation,
      index,
    },
  };
};
