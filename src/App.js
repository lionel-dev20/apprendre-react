import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployess] = useState (
    [
      { 
        name : "Lionel", 
      role: "React", 
      img : "https://i.pinimg.com/564x/74/3e/32/743e32c2cd356eaffe91e5a84443b40a.jpg"
    },
      {
      name : "Evrard", 
      role: "Flutter", 
      img : "https://media.techtribune.net/uploads/2022/11/bleach-ichigo-thousand-year-blood-war-anime.jpg"
    },
      {
        id : 3,
      name : "Gautier", 
      role: "Dev ops", 
      img : "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/12/legiao_3CIEFBoT2l4S.jpg.webp"
    },
      {
       
      name : "Virgil", 
      role: "Flutter App", 
      img : "https://i.pinimg.com/564x/37/e8/6d/37e86d8a2b6746f28c3eeddfce2679ec.jpg"}
    ]
  )
  const showEmployees = true;
  return (
    <div className="App">
     
      { showEmployees ? (
      <>

      
        <div className="flex flex-wrap justify-center">
         {employees.map( (employee) => {
           return ( <Employee key = {uuidv4()} name = {employee.name}  role = {employee.role}  img = {employee.img} /> );
         })}
        </div>
        </>
    )
    : (
     <p>You cannot see the employees list</p>
     )}
    </div>
  );
}

export default App;
