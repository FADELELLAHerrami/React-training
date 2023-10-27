import { useState } from 'react'
import './App.css'

function App() {
  const [Name,setName] = useState({firstName: "",lastName:""});

  function toggleName(event){
    setName(prevName => {
      return{
        ...prevName,
        [event.target.name]:event.target.value
      }
        
      
      
    })
  }

  
  

  return (
    <>
      <form>
      {console.log(Name.firstName,Name.lastName)}
        <input name="firstName" type="text" placeholder='enter first name' onChange={toggleName}></input>
        <input name="lastName" type="text" placeholder='enter first name' onChange={toggleName}></input>
      </form>
    </>
  )
}

export default App
