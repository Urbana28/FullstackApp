import React from 'react';
import '../../styles/Header.scss'
import logotype from '../../img/healthcare-and-medical.svg'
import MenuComponent from "./MenuComponent";
import SearchInput from "../Common/SearchInput";


interface IProps {
    isAuth: boolean
}

const Header:React.FC<IProps> = ({isAuth}) => {

    return (
        <div className='container'>
            <div className='container__logo'><img src={logotype} alt=""/></div>
                <SearchInput />
            {isAuth && <div className='container__menu'>
                <MenuComponent />
            </div>}

        </div>
    )
}

export default Header;