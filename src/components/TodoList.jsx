import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle, destroy } from '../todos/TodosSlice'
//useSelector ile redux store'daki todos stateini alıyoruz
function TodoList() {
    //store'daki todos stateini alıyoruz ve items'a atıyoruz
    //state'in altındaki todos isimli slice'ın items'ını alıyoruz.İtems oradaki obje.
    const items = useSelector(state => state.todos.items)
    const dispatch = useDispatch()

    const handleDestroy = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(destroy(id))
        }

    }

    return (
        <ul className="todo-list">
            {
                items.map(item => (
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

export default TodoList