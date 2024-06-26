export const setUser = (userData: any) => ({
    type: 'SET_USER',
    payload: userData,
  });
  
  const initialState = {
    user: null,
  };
  
  const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  