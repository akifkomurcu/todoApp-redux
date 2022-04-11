import { createSlice } from "@reduxjs/toolkit";

export const TodosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [{
            id: 1,
            title: 'Learn React',
            completed: true,
        },
        {
            id: 2,
            title: 'Learn Redux',
            completed: false,
        }],
    },
    //reducerlar stateleri dağıtır
    reducers: {
        addTodo: (state, action) => {
            //addTodo'nun amacı state'in altındaki items objesini pushlamak
            state.items.push(action.payload);
        }
    }
})
//reducerları export ediyoruz
export const { addTodo } = TodosSlice.actions;
export default TodosSlice.reducer;