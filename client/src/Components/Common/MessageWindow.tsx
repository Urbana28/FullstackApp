import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from "react-redux";
import {patientActions} from "../../store/patientReducer";
import IconButton from '@material-ui/core/IconButton';

interface IProps {
    message: string
}

const MessageWindow:React.FC<IProps> = ({message}) => {
    const dispatch = useDispatch();

    return (
         <div className='modal'>
            <div className='modal__message'>{message}</div>
            <IconButton aria-label='close'  onClick={() => {dispatch(patientActions.setAnswerMessage(''))}}><CloseIcon/></IconButton>
        </div>
    )
}

export default MessageWindow;
