import {configureStore} from '@reduxjs/toolkit'
import musicReducer from './features/musicFeature'
export const store=configureStore({
    reducer:{
        music:musicReducer
    }
});
