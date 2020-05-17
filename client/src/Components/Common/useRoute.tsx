import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Groups from "../Groups";
import SignInForm from "../Auth/SignInForm";
import LoginContainer from "../Auth/LoginContainer";
import TimetablePage from "../TimetablePage";
import NewPatientForm from "../patient/NewPatientForm";
import PatientsBase from "../patient/PatientsBase";
import PatientContainer from "../patient/PatientContainer";


const useRoute = (isAuth: boolean) => {

    if (isAuth) {
        return (
            <Switch>
                <Route exact component={TimetablePage} path='/timetable'/>
                <Route component={Groups} path='/groups'/>
                <Route component={PatientContainer} path='/patientPage/:patientId?'/>
                <Route component={NewPatientForm} path='/patientForm'/>
                <Route component={PatientsBase} path='/patients'/>
                <Redirect to='/timetable'/>
            </Switch>

        )
    } else {
        return (
        <Switch>
            <Route component={SignInForm} path='/signIn'/>
            <Route exact component={LoginContainer} path='/login'/>
        </Switch>
        )
    }


}

export default useRoute;