import React from "react";
import { combineReducers } from "redux";
import ActiveBookReducer from "./ActiveBookReducer";
import BooksReducer from "./BooksReducer";

export default combineReducers({
    activeBook : ActiveBookReducer,
    books: BooksReducer
});