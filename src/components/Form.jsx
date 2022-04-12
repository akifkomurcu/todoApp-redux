import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../todos/TodosSlice'


function Form() {

    const [title, setTitle] = useState('')
    //useDispatch ile redux dispatch'ı alıyoruz ve dispatch'e atıyoruz.
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        //input boşsa göndermiyoruz
        if (!title) return;
        // console.log(title)
        //inputtan aldığımız veriyi dispatch ile redux store'a gönderiyoruz.
        //dispatch'in amacı veriyi manipüle etmemiz için store ulaştırmaktır.

        //id olarak uniqe olması için reduxjs/toolkit kütüphanesinde nanoid kullanıldı.
        //title, yukarıdaki state'den dolayısıyla inputtan gelen veridir.
        //prepare eklendikten sonra id ve completed değerleri sabit olduğu için todoslice'ta bu değerleri prepare içinde tanımladık.
        dispatch(addTodo({ title }))
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="new-todo" placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus />
        </form>
    )
}

export default Form