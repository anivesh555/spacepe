import { configureStore } from '@reduxjs/toolkit'
import userslice from "./user-slice"
export default configureStore({
    reducer: {
        user: userslice.reducer,


    },
})
