import React from 'react';
import './App.css';
import { Person , Country } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
         name = "Talha" 
         age = {28}
         isMarried = {false} 
         friends={["ali" , "gujjar" , "roshan" ]}
         country = {Country.India}
      />
    </div>
  );
}

export default App;
