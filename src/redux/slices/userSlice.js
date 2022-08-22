import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: 'username1', age: 32 }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserName: (state, action) => {
      state.name = action.payload
    },
    changeUserAge: (state, action) => {
      state.age = action.payload
    }
  }
})

export const { changeUserName, changeUserAge } = userSlice.actions

export default userSlice.reducer