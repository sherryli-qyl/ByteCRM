const reloadReducer = (state = false, action) => {
  const { type, reload, value, key } = action;
  switch (type) {
    case 'SAVE':
      return { ...state, reload, value, key };

    default:
      return state;
  }
};

export default reloadReducer;
