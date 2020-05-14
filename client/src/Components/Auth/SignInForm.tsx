import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../styles/SignInForm.scss'
import {InputAdornment, IconButton, FormHelperText} from "@material-ui/core";
import HelpIcon from '@material-ui/icons/Help';
import {useDispatch} from "react-redux";
import {setSignedUser} from "../../store/signInReducer";
import {IUserData} from "../../types/SignInTypes";


const SignInForm = () => {
    const dispatch = useDispatch();
   const [isPasswordTip, setPasswordTip] = useState(false)
    const { handleSubmit, register, errors } = useForm<IUserData>();
    const onSubmit = (formData:IUserData) => {
        dispatch(setSignedUser(formData))
    };
    return(

        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className= 'form__input'>
                <TextField
                    label='Email'
                    variant="outlined"
                    name='email'
                    inputRef={register({
                    required: 'Field is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                        message: 'invalid email address'
                    }
                })}
                    type="text"
                    error={!!errors.email}/>
                <FormHelperText error>{errors?.email?.message}</FormHelperText>
            </div>

            <div className='form__input'>
                <TextField label='Phone number' variant="outlined" name='phoneNumber' inputRef={register({
                    required: 'Field is required',
                    pattern: {
                        value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
                        message: 'invalid phone number'
                    }
                })}
                       error={!!errors.phoneNumber}
                           type="text"/>
                <FormHelperText error>{errors?.phoneNumber?.message}</FormHelperText>
            </div>

            <div className='form__input'>
                <TextField
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setPasswordTip(true)} onBlur={() => setPasswordTip(false)}>
                                    <HelpIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                     label="Password"
                    variant="outlined"
                    name='password'
                    inputRef={register({
                    required: 'Field is required',
                    pattern: {
                        value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
                        message: 'invalid password'
                    }
                })}
                    error={!!errors.password}
                           type="text"/>
                {isPasswordTip && <FormHelperText>Пароль должен содержать хотя бы 1 латинскую заглавную и 1 латинскую строчную буквы, 1 число.
                    Минимальная длина пароля 6 символов</FormHelperText>}
                <FormHelperText error>{errors?.password?.message}</FormHelperText>
            </div>



            <Button color='primary' className='form__button' type='submit'>Sign In</Button>
        </form>
    )
}

export default SignInForm;