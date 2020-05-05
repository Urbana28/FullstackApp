import React from 'react';
import '../../styles/PatientPage.scss'
import patient from '../../img/patient-women.svg'
import AddIcon from '@material-ui/icons/Add';
import {TextField} from "@material-ui/core";
import MedicalCard from './MedicalCard';

const PatientPage = () => {
    return (
        <div className='patient-container'>
            <div className='patient-container__patient'>
                <div className='patient-container__patient__photo'>
                    <img src={patient} alt=""/>
                </div>
                <div className='patient-container__patient__info'>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Name" /></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Sex" /></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Date of birth" /></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Phone number" /></div>
                </div>
            </div>
            <div className='patient-container__card'>
                <div className='patient-container__card__title'>
                    <div className='patient-container__card__title__t'>Medical Card</div>
                    <div className='patient-container__card__title__btn'><AddIcon onClick={()=>alert('hi')} color='primary'/></div>
                </div>
                <div className='patient-container__mainPart__cardBlock'>
                    <MedicalCard/>
                </div>
            </div>
        </div>
    )
}

export default PatientPage;