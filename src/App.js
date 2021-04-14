import React from 'react';
import './App.css';
import Profile from './components/profile/profilephoto';
import Name from './components/profile/FullName';
import Address from './components/profile/Address';
import Header from './components/profile/header';


function App() {
  return (
    <div className="App">
        <Header/>
        <Profile/> 
         <Name/> 
       <Address/> 
       
    </div>
  );
}

export default App;
