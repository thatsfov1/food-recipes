import './App.css'
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Recipes from './pages/Recipes/Recipes';

const App:React.FC =  () =>{

    const [search, setSearch] = useState<string>('');


    return (
    <div className='app'>
        <Header />
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/recipes' element={<Recipes/>}/>
            </Routes>
        </div>
    </div>
  )
}




export default App
