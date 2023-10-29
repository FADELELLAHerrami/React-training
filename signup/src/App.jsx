import './App.css';
import { useState } from 'react';

function App() {


  // state of the form
  const [FormData,setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isJoined: false

  })

  // function to manage the form
  function handleChange(event){
    const {type,name,value,checked} = event.target;
    return(
      setFormData((prevFormData)=>({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }))
    )
  }
  // function to hundle button
  function handleButton(event){
    event.preventDefault();
    FormData.password !== FormData.confirmPassword ? console.log("Passwords do not match") :FormData.isJoined === true ? console.log("welcome to our newsletter") : console.log("signing successfully");
  }
  return (
    <div className='container'>
      <form onSubmit={handleButton} className='form'>
          <input
          className='form--input'
            type='email'
            placeholder='Email adress'
            value={FormData.email}
            onChange={handleChange}
            name="email"
          />
          <input
          className='form--input'
            type='password'
            placeholder='Password'
            value={FormData.password}
            onChange={handleChange}
            name="password"
          />
          <input
          className='form--input'
            type='password'
            placeholder='Confirm password'
            value={FormData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
          <div className='form--marketing'>
              <input
                type='checkbox'
                checked={FormData.isJoined}
                onChange={handleChange}
                name="isJoined"
                id='isJoined'
              />
              <label htmlFor='isJoined'>I want to join the newsletter</label>
          </div>
          <button className='form--submit'>Sign up</button>
      </form>
      {console.log(FormData.email,FormData.password,FormData.confirmPassword,FormData.isJoined)}
    </div>
  )
}

export default App
