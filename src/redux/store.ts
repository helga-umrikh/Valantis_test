import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { itemAPI } from "../services/ItemsService";


const rootReducer = combineReducers( {
  [itemAPI.reducerPath]: itemAPI.reducer
})


export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(itemAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']