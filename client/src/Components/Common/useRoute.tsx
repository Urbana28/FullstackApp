import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Groups from "../Groups";
import SignInForm from "../Auth/SignInForm";
import LoginContainer from "../Auth/LoginContainer";
import PatientPage from '../patient/PatientPage';
import TimetablePage from "../TimetablePage";
import NewPatientForm from "../patient/NewPatientForm";




const useRoute = () => {
    return(
        <Switch>
            <Route component={Groups} path='/groups'/>
            <Route component={SignInForm} path='/signIn'/>
            <Route component={LoginContainer} path='/login'/>
            <Route component={PatientPage} path='/patientPage/:patientId?'/>
            <Route component={TimetablePage} path='/login'/>
            <Route component={NewPatientForm} path='/patientForm'/>
        </Switch>
    )
}

export default useRoute;