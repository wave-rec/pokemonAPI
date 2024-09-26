import { configureStore } from "@reduxjs/toolkit";
import { favoritSlice, pokemonSlice } from "./slice";

export const store = configureStore({
  reducer: {
    pokemon : pokemonSlice.reducer,
    favorite : favoritSlice.reducer
  }
})