import React from 'react';

function Nav(props) {
    function clickHandler(event) {
    const id = event.target.id
    props.setPage(id)
    }
    return (
        <div>
            <a id ='about' onClick={clickHandler} href='#'> About</a>
            
            <a id ='portfolio' onClick={clickHandler} href='#'> Portfolio</a>
            
            <a id ='contact' onClick={clickHandler} href='#'> Contact</a>
            
            <a id ='resume' onClick={clickHandler} href='#'> Resume</a>
        </div>
    )
}
export default Nav;