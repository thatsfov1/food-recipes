import './App.css'
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Recipes from './pages/Recipes/Recipes';
import SingleDish from './pages/SingleDish/SingleDish';
import ErrorPage from './components/ErrorPage/ErrorPage';
import RecipesRaw from './components/RecipesRaw/RecipesRaw';
import Library from './pages/Library/Library';
import AllRecipes from './pages/AllRecipes/AllRecipes';

const App:React.FC =  () =>{

    return (
    <div className='app'>
        <Header />
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/category/:mealType' element={<AllRecipes/>}/>
                <Route path='/recipes' element={<Recipes/>}/>
                <Route path='/recipe/:id' element={<SingleDish/>}/>
                <Route path='/library' element={<Library/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    </div>
  )
}




export default App
