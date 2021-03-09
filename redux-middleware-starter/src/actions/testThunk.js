export default () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // console.log('i waited for 2 seconds');
      const reduxState = getState();
      console.log(reduxState);
      dispatch({
        type: 'testThunk',
      });
    }, 2000);
  };
};
