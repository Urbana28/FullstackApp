import React from 'react';
import preloader from '../../img/ajax-loading-2.gif'
import '../../App.scss'

const Preloader = () => {
    return(
        <div className='preloader'>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader;