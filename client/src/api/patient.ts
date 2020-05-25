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
    getAllPatients(page:number, limit: number) {
         return instance.get<GetPatients>(`/patients?page=${page}&limit=${limit}`)
    },
    deletePatient(id: string) {
         return instance.delete(`patient/${id}`)
    }
}

type GetPatients = {
    message: string,
    results: Array<IPatient>,
    totalCount: number
}