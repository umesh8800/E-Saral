import React from 'react'
import './index.css';

function Header() {
    return (
        <nav className="navbar" style={{}}>
            <h1 className ="headername">Meraki</h1>
            <form>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>

            </form>
        </nav>
    )
}

export default Header;

