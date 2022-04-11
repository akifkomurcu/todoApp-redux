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
        },
        toggle: (state, action) => {
            //toggle'nun amacı state'in altındaki items objesini completed'ını true/false yapmak
            const { id } = action.payload;

            const item = state.items.find(item => item.id === id);
            item.completed = !item.completed;
        },
        destroy: (state, action) => {
            //destroy'nun amacı state'in altındaki items objesini silmek
            const id = action.payload;
            //seçilen id harici id'li tüm elemanları toplamak istiyorum. item.id denk değilse id filtre içine eklensin
            const filtered = state.items.filter(item => item.id !== id);
            state.items = filtered;
        },
    },
});
//reducerları export ediyoruz
export const { addTodo, toggle, destroy } = TodosSlice.actions;
export default TodosSlice.reducer;