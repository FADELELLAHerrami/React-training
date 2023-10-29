import { useEffect } from 'react';
import './App.css';
import WindowTracker from './components/WindowTracker';
import {useState} from 'react';

function App() {
  // state of the showing 
  const [show, setShow] = useState(false);
  //
  const [windowWidth,setWindowWith] = useState(window.innerWidth);
  // click handle
  function clickHandle(){
    return(setShow((prevState)=> !prevState))
  }
  // useEffect 
  useEffect(()=>{
    function showWidth(){
      console.log("signinp up ...");
      setWindowWith(window.innerWidth);
    }
    window.addEventListener("resize",showWidth);
    return function(){
      console.log("cleaning up ...")
      window.removeEventListener("resize",showWidth);
    }
  },[])

  return (
    <div className="container">
            <button onClick={clickHandle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker width= {windowWidth} />}
    </div>
  )
}

export default App
