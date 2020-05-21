import axios from 'axios';
import {IPatient} from "../types/patientTypes";

const instance = axios.create({
    baseURL: ' http://localhost:3000/api/client',
    withCredentials: true
})

export const patientAPI = {
     addPatient(patientFormData: IPatient) {
         return instance.post('/patient', patientFormData)
     },
    getAllPatients() {
         return instance.get<{message: string, patients:Array<IPatient>}>('/patients').then(res => res.data.patients)
    },
    deletePatient(id: string) {
         return instance.delete(`patient/${id}`)
    }
}