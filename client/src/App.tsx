import React from 'react';
import './App.scss';
import Header from './Components/Header';
import useRoute from './useRoute'

function App() {
    const route = useRoute();
  return (
    <div className="App">
      <Header />
      <div className='App__components'>
          {route}
      </div>
    </div>
  );
}

export default App;
