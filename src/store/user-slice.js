import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    allUserData: [],
    isAuth: false,
    user: {},
    message: "",
}
const userslice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            getAllUserData(state, action) {
                state.data = action.payload.data;
            }
        }
    })
export const userActions = userslice.actions;
export default userslice;