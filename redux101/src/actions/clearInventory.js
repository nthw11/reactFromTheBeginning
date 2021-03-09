export default (operation, index) => {
  console.log('clearinventory sanity check');
  return {
    type: 'clearInventory',
    payload: {},
  };
};
