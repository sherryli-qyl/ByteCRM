const contactReducer = (state = '', action) => {
  const { type, contact } = action;
  switch (type) {
    case 'ADD':
      return { ...state, contact };

    default:
      return state;
  }
};

export default contactReducer;
