const authData = {
  isLogin: false,
  userLoginData: {},
};

const authReducer = (state = authData, action) => {
  console.log('reducerauth', action);
  switch (action.type) {
    case 'LOGIN-USER':
      return {
        ...state,
        isLogin: true,
        userLoginData: {
          ...action.userLogin,
        },
      };
    case 'LOGOUT-USER':
      return {
        ...state,
        isLogin: action.data,
      };
    default:
      return state;
  }
};

export default authReducer;
