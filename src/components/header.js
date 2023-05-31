import React from 'react';
import Nav from './nav';
function Header(props) {
    return (
        <header>
            <h1>Dylan A</h1>
            <Nav page = {props.page} handleNavigation= {props.handleNavigation}/>
        </header>
    );
}
export default Header;