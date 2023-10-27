import { useState } from 'react'
import './App.css'

function App() {
  const [firstName,setFirtName] = useState("");

  function toggle(event){
    setFirtName(event.target.value)
  }
  

  return (
    <>
      <form>
      {console.log(firstName)}
        <input type="text" placeholder='enter first name' onChange={toggle}></input>
      </form>
    </>
  )
}

export default App
