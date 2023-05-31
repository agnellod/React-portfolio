import React from 'react';
import Nav from '../Nav'
function Header(props) {
    return (
        <header>
            <h1>Dylan A</h1>
            <Nav page = {props.page} setPage = {props.setPage}/>
        </header>
    )
}
export default Header;