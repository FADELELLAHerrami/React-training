import { useState } from 'react';
import './App.css';

function App() {
  const [Name, setName] = useState(
    { 
              firstName: "", 
              lastName: "", 
              email: "" ,
              comment:"",
              isFriendly: false,
              unemployed: "",
              favColor: ""
            }
      );

  function toggleName(event) {
    const {name,value,checked,type} = event.target ;
    setName(prevName => ({
      ...prevName,
      [name]: type === "checkbox"? checked : value 
    }));
    
  }

  function handleSubmit(event){
        event.preventDefault();
      }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
            value={Name.firstName} 
            name="firstName" 
            type="text" 
            placeholder='Enter first name' 
            onChange={toggleName}
            />

        <input 
            value={Name.lastName} 
            name="lastName" type="text" 
            placeholder='Enter last name' 
            onChange={toggleName}
            />

        <input 
            value={Name.email} 
            name="email" 
            type="email" 
            placeholder='Enter email' 
            onChange={toggleName}
            />

        <textarea 
            value={Name.comment} 
            name="comment" 
            type="text" 
            placeholder='Enter a comment' 
            onChange={toggleName}  />

        <input 
            type='checkbox' 
            checked={Name.isFriendly} 
            id='isFriendly' 
            name='isFriendly'
            onChange={toggleName}
            />
        <label 
            htmlFor="isFriendly" >Is Friendly ?</label> 
        <br/>
        <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name='unemployed'
                    value="unemployed"
                    onChange={toggleName}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name='unemployed'
                    value="part-time"
                    onChange={toggleName}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name='unemployed'
                    value="full-time"
                    onChange={toggleName}
                />
                <label htmlFor="full-time">Full-time</label>
                </fieldset>
                <br />
                <br />
                <select
                     id="favColor"
                     value={Name.favColor}
                     onChange={toggleName}
                     name="favColor"
                     >
                    <option value="">----</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <button>submit</button>
            
        {console.log(Name.firstName,Name.lastName,Name.email,Name.comment,Name.isFriendly,Name.unemployed,Name.favColor)}
      </form>
    </>
  );
}

export default App;
