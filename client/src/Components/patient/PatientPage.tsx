import React from 'react';
import '../../styles/PatientPage.scss'
import patientImg from '../../img/patient-women.svg'
import AddIcon from '@material-ui/icons/Add';
import {TextField} from "@material-ui/core";
import MedicalCard from './MedicalCard';
import {IPatient} from "../../types/patientTypes";

interface IProps {
    patient: IPatient | null
}

const PatientPage:React.FC<IProps> = ({patient}) => {

    return (
        <div className='patient-container'>
            <div className='patient-container__patient'>
                <div className='patient-container__patient__photo'>
                    <img src={patientImg} alt=""/>
                </div>
                <div className='patient-container__patient__info'>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Фамилия" value={patient?.surname} /></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Имя" value={patient?.name} /></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Отчество" value={patient?.patronymic} /></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Пол" value={patient?.gender}/></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Дата рождения" value={patient?.birthDate}/></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Телефон" value={patient?.phoneNumber}/></div>
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