const userReducer = (state = '', action) => {
<<<<<<< HEAD
    const { type, reload, user } = action;
    switch (type) {
      case 'ADD':
        return { ...state, reload, user };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  
=======
  const { type, reload, user } = action;
  switch (type) {
    case 'ADD':
      return { ...state, reload, user };

    default:
      return state;
  }
};

export default userReducer;
>>>>>>> master
