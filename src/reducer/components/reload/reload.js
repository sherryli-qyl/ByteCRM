const reloadReducer = (state = false, action) => {
  const { type, reload, value } = action;
  switch (type) {
    case 'SAVE':
      return { ...state, reload, value };

    default:
      return state;
  }
};

export default reloadReducer;
