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
      name : "Ronaldo", 
      role: "React dev", 
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzVkD9xcI2dB8JKNq2vjZAKDTnK6J6oZ-Uw&usqp=CAU"
    },

  {
  name : "Cedric", 
  role: "Php expert", 
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfefoNyTEBLuqL8SZcG-BmscSZMtjQK7H9sQ&usqp=CAU"
},

  {
  name : "Gautier", 
  role: "Dev ops", 
  img : "https://www.anime-planet.com/images/characters/l-death-note-1337.jpg"
},
      
{
       
      name : "Virgile", 
      role: "Mobile dev", 
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMQwj7NjkMbkVI0W7qbxGxSIIy0ND3Vthqw&usqp=CAU"}
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
