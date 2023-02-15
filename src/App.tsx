import './App.css'
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

const App:React.FC =  () =>{

    const [search, setSearch] = useState<string>('');


    return (
    <div className='app'>
        <Header />
        <div className="container">
            <Navbar/>
        </div>
    </div>
  )
}




export default App
