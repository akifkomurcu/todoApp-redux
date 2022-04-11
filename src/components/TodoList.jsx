import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle, destroy } from '../todos/TodosSlice'
//useSelector ile redux store'daki todos stateini alıyoruz
function TodoList() {
    let filtered = [];
    //store'daki todos stateini alıyoruz ve items'a atıyoruz
    //state'in altındaki todos isimli slice'ın items'ını alıyoruz.İtems oradaki obje.
    const items = useSelector(state => state.todos.items)
    const ActiveFilter = useSelector(state => state.todos.ActiveFilter)

    const dispatch = useDispatch()

    const handleDestroy = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(destroy(id))
        }

    }

    filtered = items;
    //activeFilter'ın değeri All ise filtered'a items'ı direkt atıyoruz. ozaman if'e girmeden hepsini gösterecek. fakat active filter all değil ise active ise yani completedları false ise ver diyoruz.
    if (ActiveFilter !== "All") {
        filtered = items.filter((todo) => ActiveFilter === "Active" ? todo.completed === false : todo.completed === true)
    }
    return (
        <ul className="todo-list">
            {
                filtered.map(item => (
                    <li key={item.id} className={item.completed ? 'completed' : ''}>
                        <div className="view">
                            <input className="toggle" type="checkbox"
                                onChange={() => dispatch(toggle({ id: item.id }))} checked={item.completed} />
                            <label>{item.title}</label>
                            <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList;