import React, {useEffect} from 'react';
import './App.scss';
import Header from './Components/Headers/Header';
import useRoute from './Components/Common/useRoute'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {setAuthUser} from "./store/signInReducer";
import MessageWindow from "./Components/Common/MessageWindow";


function App() {
    const isAuth = useSelector((state:AppStateType) => state.signInPage.isAuth)
    const route = useRoute(isAuth);
    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(setAuthUser())
    }, [dispatch])
    const message = useSelector((state: AppStateType) => state.patientPage.message)


  return (
    <div className="App">
      <Header isAuth={isAuth} />
        <div>
            {message !== '' && <MessageWindow message={message} />}
        </div>
        <div className='App__components'>
            {route}
        </div>

    </div>
  );
}



export default App;
