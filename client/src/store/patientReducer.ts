import {IPatient} from "../types/patientTypes";
import {Dispatch} from "redux";
import {AppStateType} from "./store";
import {patientAPI} from "../api/patient";

const initialState:InitialStateType = {
    patients: []
}

type InitialStateType = {
    patients: Array<IPatient>
}


export const patientReducer = (state = initialState, action:commonActionsPatient) => {
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
             }
        default: return state

    }
}

type AC<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;
type commonActionsPatient = AC<typeof patientActions>

export const patientActions = {
    setNewPatient: (newPatient:IPatient) => ({type: 'ADD_NEW_PATIENT', newPatient} as const),
    setAllPatients: (patients: Array<IPatient>) => ({type:'SET_ALL_PATIENTS', patients} as const)
}


export const addNewPatient = (patientFormData: IPatient) => {
    return async (dispatch: Dispatch<commonActionsPatient>, getState: () => AppStateType) => {
        try {
            let res = await patientAPI.addPatient(patientFormData)
            dispatch(patientActions.setNewPatient(res.data.patient))
        } catch (e) {
            console.log(e)
        }
    }
}

export const getPatients = () => {
    return async (dispatch: Dispatch<commonActionsPatient>, getState: () => AppStateType) => {
        try {
            let patients = await patientAPI.getAllPatients()
            dispatch(patientActions.setAllPatients(patients))
        } catch (e) {
            console.log(e)
        }
    }
}