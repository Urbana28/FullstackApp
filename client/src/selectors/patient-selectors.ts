import {AppStateType} from "../store/store";

export const getPatientSelector = (state:AppStateType, patientId: string) => state.patientPage.patients.find(p => p._id === patientId)
