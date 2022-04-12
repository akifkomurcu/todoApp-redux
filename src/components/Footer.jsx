import React from 'react'

function Footer() {
    return (
        <footer className="info">
            <p>Click to edit a todo</p>
            <p>Created by <a href="akifzsche.github.io">Akif Komurcu</a></p>

        </footer>
    )
}
//sabit bir footer olduğu için memo ile sarmalayınca tekrar tekrar render olmasına gerek yok.
export default React.memo(Footer)