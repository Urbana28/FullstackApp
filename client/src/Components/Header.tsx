import React from 'react';
import '../styles/Header.scss'
import {NavLink} from "react-router-dom";
import logotype from '../img/healthcare-and-medical.svg'

const Header = () => {
    return (
        <div className='container'>
            <div className='container__logo'><img src={logotype} alt=""/></div>
            <div className='container__groups'>
                <NavLink className='container__groups__link' activeClassName='selected' to='/groups'>
                    Groups
                </NavLink>
            </div>
            <div className='container__signIn'>
                <NavLink className='container__signIn__link' activeClassName='selected' to='/signIn'>
                    Sign in
                </NavLink>
            </div>
        </div>
    )
}

export default Header;