import React from 'react';
import Nav from '../Nav'
function Header(props) {
    return (
        <div>
            <h1>Dylan A</h1>
            <Nav page = {props.page} setPage = {props.setPage}/>
        </div>
    )
}
export default Header;