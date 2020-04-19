import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Groups from "./Components/Groups";
import SignIn from "./Components/SignIn";



const useRoute = () => {
    return(
        <Switch>
            <Route component={Groups} path='/groups'/>
            <Route component={SignIn} path='/signIn'/>
        </Switch>
    )
}

export default useRoute;