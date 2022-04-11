import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "../todos/TodosSlice";

 const store = configureStore({
    reducer: {
        todos: TodosSlice,
    },

});
export default store;
