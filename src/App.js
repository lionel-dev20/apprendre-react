import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';


function App() {
const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
     
      { showEmployees ? (
      <>
       <input type="text" onChange={(e) => {console.log(e.target.value); setRole(e.target.value)}} />
        <Employee name="Lionel" role="Developer react js"></Employee>
        <Employee name ="Evrard" role ="Flutter developer" ></Employee>
        <Employee role={role}></Employee>
        <Employee></Employee>
     

        </>
    )
    : (
     <p>You cannot see the employees list</p>
     )}
    </div>
  );
}

export default App;
