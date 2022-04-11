import React from 'react'
import { useSelector } from 'react-redux'
//useSelector ile redux store'daki todos stateini alıyoruz
function TodoList() {
    //store'daki todos stateini alıyoruz ve items'a atıyoruz
    //state'in altındaki todos isimli slice'ın items'ını alıyoruz.İtems oradaki obje.
    const items = useSelector(state => state.todos.items)
    return (
        <ul className="todo-list">
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>akifzsche</label>
                    <button className="destroy"></button>
                </div>
            </li>
            {
                items.map(item => (
                    <li key={item.id} className={item.completed ? 'completed' : ''}>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>{item.title}</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList