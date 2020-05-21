import React from 'react';
import '../../styles/PatientPage.scss'
import patientImgW from '../../img/patient-women.svg'
import patientImgM from '../../img/patient-men.svg'
import AddIcon from '@material-ui/icons/Add';
import {TextField} from "@material-ui/core";
import MedicalCard from './MedicalCard';
import {useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {getPatientSelector} from "../../selectors/patient-selectors";
import { withRouter } from 'react-router-dom';
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";



const PatientPage = (props:any) => {

    const id = props.match.params.patientId
    const patient = useSelector((state: AppStateType) => getPatientSelector(state, id))


   const {errors, register, handleSubmit} = useForm();
    const onSubmit = (values:any) => {
        console.log(values)
    }
    console.log(patient)
    return (
        <div className='patient-container'>
            <div className='patient-container__patient'>
                <div className='patient-container__patient__photo'>
                    {patient?.gender === 'женский' ? <img src={patientImgW} alt=""/> : <img src={patientImgM} alt=""/>}
                </div>
                <form className='patient-container__patient__info'>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Фамилия" value={patient?.surname}/></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Имя" value={patient?.name}/></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Отчество" value={patient?.patronymic}/></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Пол" value={patient?.gender}/></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Дата рождения" value={patient?.birthDate}/></div>
                    <div className='patient-container__patient__info__field'><TextField size='small' label="Телефон" value={patient?.phoneNumber}/></div>
                    <Button>Edit</Button>
                </form>
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

export default withRouter(PatientPage);