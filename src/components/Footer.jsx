import React from 'react'

function Footer() {
    return (
        <footer className="info">

            <p>Created by <a href="https://akifzsche.github.io/" target={"_blank"}><strong>Akif Komurcu</strong></a></p>

        </footer>
    )
}
//sabit bir footer olduğu için memo ile sarmalayınca tekrar tekrar render olmasına gerek yok.
export default React.memo(Footer)