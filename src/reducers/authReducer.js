const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, user: action.payload }; // Set user data on login
      case "LOGOUT":
        return { ...state, user: null }; // Remove user data on logout
      default:
        return state;
    }
  };
  
  export default authReducer;
  