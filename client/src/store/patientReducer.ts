import {IPatient} from "../types/patientTypes";
import {Dispatch} from "redux";
import {patientAPI} from "../api/patient";

const initialState: InitialStateType = {
    patients: [],
    isFetching: false,
    message: ''
}

type InitialStateType = {
    patients: Array<IPatient>,
    isFetching: boolean,
    message: string
}


export const patientReducer = (state = initialState, action: commonActionsPatient) => {
    switch (action.type) {
        case "SET_ALL_PATIENTS":
            return {
                ...state,
                patients: action.patients
            }
        case "ADD_NEW_PATIENT":
            return {
                ...state,
                patients: [...state.patients, action.newPatient]
            };
        case "SET_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            };
        case "SET_ANSWER_MESSAGE":
            return {
                ...state,
                message: action.message
            }
        default:
            return state

    }
}

type AC<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;
type commonActionsPatient = AC<typeof patientActions>

export const patientActions = {
    setNewPatient: (newPatient: IPatient) => ({type: 'ADD_NEW_PATIENT', newPatient} as const),
    setAllPatients: (patients: Array<IPatient>) => ({type: 'SET_ALL_PATIENTS', patients} as const),
    setIsFetching: (isFetching:boolean) => ({type: 'SET_IS_FETCHING', isFetching} as const),
    setAnswerMessage: (message: string) => ({type: 'SET_ANSWER_MESSAGE', message} as const)
}


export const addNewPatient = (patientFormData: IPatient) => {
    return async (dispatch: Dispatch<commonActionsPatient>) => {
        try {
            let res = await patientAPI.addPatient(patientFormData)
            dispatch(patientActions.setNewPatient(res.data.patient))
            dispatch(patientActions.setAnswerMessage((res.data.message)))
        } catch (e) {
            dispatch(patientActions.setAnswerMessage((e.response.data.message)))
        }
    }
}

export const getPatients = () => {
    return async (dispatch: Dispatch<commonActionsPatient>) => {
        try {
            dispatch(patientActions.setIsFetching(true))
            let patients = await patientAPI.getAllPatients()
            dispatch(patientActions.setAllPatients(patients))
            dispatch(patientActions.setIsFetching(false))
        } catch (e) {
            console.log(e)
        }
    }
}