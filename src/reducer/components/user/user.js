const userReducer = (state = '', action) => {
  const { type, reload, user } = action;
  switch (type) {
    case 'ADD':
      return { ...state, reload, user };

    default:
      return state;
  }
};

export default userReducer;
