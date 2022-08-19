const initialState = { name: 'username1', age: 32 };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGEUSERNAME": {
      return { ...state, name: action.payload };
    }
    case "CHANGEAGE": {
      return { ...state, age: action.payload };
    }
    default:
      return state;
  }
}

export default userReducer;