import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Add</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    )
}

export default Header;