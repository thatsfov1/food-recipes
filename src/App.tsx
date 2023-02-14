import './App.css'
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import {getWordInfo} from "./api/api";

const App:React.FC =  () =>{

    const [search, setSearch] = useState<string>('');


    return (
    <div className='app'>
        <Header />

    </div>

  )
}

export default App
