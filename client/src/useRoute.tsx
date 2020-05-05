import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Groups from "./Components/Groups";
import SignInForm from "./Components/Auth/SignInForm";
import LoginContainer from "./Components/Auth/LoginContainer";
import PatientPage from './Components/patient/PatientPage';
import TimetablePage from "./Components/TimetablePage";



const useRoute = () => {
    return(
        <Switch>
            <Route component={Groups} path='/groups'/>
            <Route component={SignInForm} path='/signIn'/>
            <Route component={LoginContainer} path='/login'/>
            <Route component={PatientPage} path='/patientPage/:patientId?'/>
            <Route component={TimetablePage} path='/login'/>
        </Switch>
    )
}

export default useRoute;