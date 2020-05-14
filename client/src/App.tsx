import React, {useEffect} from 'react';
import './App.scss';
import Header from './Components/Headers/Header';
import useRoute from './Components/Common/useRoute'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {setAuthUser} from "./store/signInReducer";


function App() {
    const isAuth = useSelector((state:AppStateType) => state.signInPage.isAuth)
    const route = useRoute(isAuth);
    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(setAuthUser())
    }, [])



  return (
    <div className="App">
      <Header isAuth={isAuth} />
        <div className='App__components'>
            {route}
        </div>

    </div>
  );
}



export default App;
