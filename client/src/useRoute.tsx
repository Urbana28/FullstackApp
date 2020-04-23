import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Groups from "./Components/Groups";
import SignInForm from "./Components/SignInForm";



const useRoute = () => {
    return(
        <Switch>
            <Route component={Groups} path='/groups'/>
            <Route component={SignInForm} path='/signIn'/>
        </Switch>
    )
}

export default useRoute;