const initialState = { name: 'username1', email: 'username1@example.com', avatar: 'https://robohash.org/sdsd' }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGEUSERNAME": {
      return { ...state, name: action.payload }
    }
    case "CHANGEUSEREMAIL": {
      return { ...state, email: action.paylod }
    }
    case "CHANGEAVATAR": {
      return { ...state, avatar: action.paylod }
    }
    default:
      return state;
  }
}

export default userReducer;