import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import {FormHelperText} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import '../../styles/PatientPage.scss'
import {useDispatch} from "react-redux";
import {addNewPatient, patientActions} from "../../store/patientReducer";
import {IPatient} from "../../types/patientTypes";


const NewPatientForm = () => {
    const {errors, register, handleSubmit} = useForm<IPatient>()
    const dispatch = useDispatch()
    const onSubmit = (values:IPatient) => {
        dispatch(addNewPatient(values))
    }
    useEffect(() => {
        return () => {dispatch(patientActions.setAnswerMessage(''))}
    }, [])

    return(
        <form className='form' onSubmit={handleSubmit(onSubmit)} action="">
            <div className='form__title'><h1>Создайте пациента</h1></div>
            <div className='form__input'>
                <TextField
                    name='surname'
                    label='Фамилия'
                    placeholder='Иванов'
                    variant='outlined'
                    inputRef={register({
                        required: 'Field is required'})}
                    error= {!!errors.surname}
                />
                <FormHelperText error>{errors?.surname?.message}</FormHelperText>
            </div>
            <div className='form__input'>
                <TextField
                    name='name'
                    label='Имя'
                    placeholder='Иван'
                    variant='outlined'
                    inputRef={register({
                        required: 'Field is required'})}
                    error= {!!errors.name}
                />
                <FormHelperText error>{errors?.name?.message}</FormHelperText>
            </div>
            <div className='form__input'>
                <TextField
                    name='patronymic'
                    label='Отчество'
                    placeholder='Иванович'
                    variant='outlined'
                    inputRef={register({
                        required: 'Field is required'})}
                    error= {!!errors.patronymic}
                />
                <FormHelperText error>{errors?.patronymic?.message}</FormHelperText>
            </div>
            <div className='form__input'>
                <TextField
                    name='gender'
                    label='Пол'
                    placeholder='мужской/женский'
                    variant='outlined'
                    inputRef={register({
                        required: 'Field is required'})}
                    error= {!!errors.gender}
                />
                <FormHelperText error>{errors?.gender?.message}</FormHelperText>
            </div>
            <div className='form__input'>
                <TextField
                    name='birthDate'
                    label='Дата рождения'
                    placeholder='31.12.1970'
                    variant='outlined'
                    inputRef={register({
                        required: 'Field is required'})}
                    error= {!!errors.birthDate}
                />
                <FormHelperText error>{errors?.birthDate?.message}</FormHelperText>
            </div>
            <div className='form__input'>
                <TextField
                    name='phoneNumber'
                    label='Номер телефона'
                    placeholder='+375291111111'
                    variant='outlined'
                    inputRef={register({
                        required: 'Field is required'})}
                    error= {!!errors.phoneNumber}
                />
                <FormHelperText error>{errors?.phoneNumber?.message}</FormHelperText>
            </div>
            <Button color='primary' className='form__button' type='submit'>Сохранить</Button>
        </form>
    )
}

export default NewPatientForm;