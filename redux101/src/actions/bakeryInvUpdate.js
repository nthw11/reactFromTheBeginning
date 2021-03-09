export default (operation, index) => {
  return {
    type: 'updateBakery',
    payload: {
      operation,
      index,
    },
  };
};
