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
        ActiveFilter: "All",
    },

    //initialState olarak tanımladığımız obje bu state'in içine geliyor
    //reducer kısmına veriyi manipüle edeceğimiz, yani değiştirebileceğimiz fonksiyonları yazabiliriz. Actionlarımızı yani.

    reducers: {
        addTodo: (state, action) => {
            //addTodo'nun amacı state'in altındaki items objesini pushlamak
            state.items.push(action.payload);
        },
        toggle: (state, action) => {
            //toggle'nun amacı state'in altındaki items objesini completed'ını true/false yapmak

            //action altındaki payload'da kullanıcının gönderdiği id değerini alabiliyoruz.
            const { id } = action.payload;
            //bu id'li item'ı bulup completed'ı true/false yapıyoruz.
            const item = state.items.find(item => item.id === id);
            //objedeki completed true ise false, false ise true yaparız.
            item.completed = !item.completed;
        },
        destroy: (state, action) => {
            //destroy'nun amacı state'in altındaki items objesini silmek
            const id = action.payload;
            //seçilen id harici id'li tüm elemanları toplamak istiyorum. item.id denk değilse id filtre içine eklensin
            const filtered = state.items.filter(item => item.id !== id);
            state.items = filtered;
        },
        changeActiveFilter: (state, action) => {
            //changeActiveFilter'nun amacı state'in altındaki ActiveFilter'ını değiştirmek
            state.ActiveFilter = action.payload;

        },
        clearCompleted: (state) => {
            //tamamlanmamış olan işleri bana veriyor
            const filtered = state.items.filter(item => item.completed === false)
            state.items = filtered;
        }
    },
});
//reducerları export ediyoruz
export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = TodosSlice.actions;
export default TodosSlice.reducer;