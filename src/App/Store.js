import { configureStore } from '@reduxjs/toolkit';
import totoReducer from '../App/Components/todoSlice';


export  const store = configureStore({

    reducer: totoReducer

});