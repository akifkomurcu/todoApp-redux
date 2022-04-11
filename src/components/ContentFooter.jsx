import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveFilter, clearCompleted } from '../todos/TodosSlice'
function ContentFooter() {


    const dispatch = useDispatch();
    //state'imizdeki verileri çekiyoruz
    const items = useSelector(state => state.todos.items);
    //burada state'deki items objesindeki completed değerlerini topluyoruz. Burada yaptığımız şey tamamlanmayan iş sayısını hesaplamak. False dönen item sayısı bitirilmeyen iş sayısına eşit. item.completed =true oluyor. tersi false yani tamamlanmamış iş sayısı.
    const itemsLeft = items.filter(item => !item.completed).length;
    //initial state'te aktif filtrenin ne olduğunu bilmemiz gerek bu yüzden oraya yeni bir state ekledim. Burada aktif filtrenin ne olduğunu alıyoruz.
    const ActiveFilter = useSelector(state => state.todos.ActiveFilter);



    return (
        <footer className="footer">


            <span className="todo-count">
                <strong>{itemsLeft == 1 && 0 ? itemsLeft + " item left" : itemsLeft + " items left"}</strong>

            </span>
            {/* dispatch(changeActiveFilter('All') */}
            <ul className="filters">
                <li>
                    {/* aktif filtre All'a eşitse classname selected olacak */}
                    <a href='#/' className={ActiveFilter == 'All' ? 'selected' : ''} onClick={() => dispatch(changeActiveFilter('All'))}>All</a>
                </li>
                <li>
                    <a href='#/' className={ActiveFilter == 'Active' ? 'selected' : ''} onClick={() => dispatch(changeActiveFilter('Active'))}>Active</a>
                </li>
                <li>
                    <a href='#/' className={ActiveFilter == 'Completed' ? 'selected' : ''} onClick={() => dispatch(changeActiveFilter('Completed'))}>Completed</a>
                </li>
            </ul>


            <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
                Clear completed
            </button>
        </footer>
    )
}

export default ContentFooter