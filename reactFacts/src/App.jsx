import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </>
  )
}

export default App
