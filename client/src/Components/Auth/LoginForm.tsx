import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Button from "@material-ui/core/Button";
import '../../styles/SignInForm.scss'
import {FormHelperText} from "@material-ui/core";
import {ILoginUserData} from "../../types/SignInTypes";
import {NavLink} from "react-router-dom";


interface IProps {
    login: (data:ILoginUserData) => void
}

const LoginForm:React.FC<IProps> = ({login}) => {
    const {errors, handleSubmit, register} = useForm<ILoginUserData>()
    const onSubmit = (formData:ILoginUserData) => {
        login(formData)
    }
    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form__title'><h1>Войдите в систему</h1></div>
            <div className='form__input'>
                <TextField
                    name='email'
                    label='Email'
                    variant='outlined'
                    inputRef={register({
                        required: 'Field is required'})}
                    error= {!!errors.email}
                />
                <FormHelperText error>{errors?.email?.message}</FormHelperText>
            </div>
            <div className='form__input'>
                <TextField
                    name='password'
                    label='Password'
                    variant='outlined'
                    inputRef={register({
                        required: 'Field is required'})}
                    error= {!!errors.password}
                />
                <FormHelperText error>{errors?.password?.message}</FormHelperText>
            </div>

            <Button color='primary' className='form__button' type='submit'>Login</Button>
            <div className='form__link'><NavLink to='/signIn'>Don't have an account?</NavLink></div>
        </form>
    )
}

export default LoginForm;