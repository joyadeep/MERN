import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './redux/authSlice';
export const store=configureStore({
    reducer:{
        auth:AuthReducer
    }
})

