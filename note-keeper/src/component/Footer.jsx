import React from "react";

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
// to show variable ,we put inside {}
    return(
        <footer>
            <p>Copyright : {year}</p>
        </footer>
    )
}

export default Footer