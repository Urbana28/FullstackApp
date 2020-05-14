import React from 'react';
import PatientPage from "./PatientPage";
import {useSelector} from "react-redux";
import {AppStateType} from "../../store/store";

const PatientContainer = () => {
    const patients = useSelector((state:AppStateType) => state.patientPage.patients)

    return (
        <div>
            {
                patients.map(p => (
                    <PatientPage patient={p}/>
                ))
            }

        </div>
    )
}

export default PatientContainer;