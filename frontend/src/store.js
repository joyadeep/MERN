import {configureStore} from '@reduxjs/toolkit'
import globalSlice from './redux/global/globalSlice'
import userReducer from './redux/user/userSlice'
export const store = configureStore({
    reducer: {
        user:userReducer,
        global:globalSlice
    },
  })