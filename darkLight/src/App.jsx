import Navbar from "./components/Navbar";
import Main from "./components/Main";
import './App.css';
import { useState } from "react";



export default function App() {
    const [isDark,setIsDark] = useState(false);
    function toggleDarkMode(){
        setIsDark(!isDark);
    }
    return (
        <div className="container">
            <Navbar
              toggleDarkMode={toggleDarkMode}
              darkMode= {isDark}
            />
            <Main 
              darkMode= {isDark}
            />
        </div>
    )
}