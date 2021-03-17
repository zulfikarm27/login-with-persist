const userData = {
  title: 'awe',
  desc: 'awes',
  user: [],
};

const usersReducer = (state = userData, action) => {
  switch (action.type) {
    case 'REGISTER-USER':
      return {
        ...state,
        user: [...state.user, action.data],
      };

    default:
      return state;
  }
};

export default usersReducer;
