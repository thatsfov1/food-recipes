import React from "react";
import s from './Home.module.css'
import banner from '../../assets/recipes-banner.jpeg'
import {Hit} from '../../models/models'
import SingleRecipe from "../../components/SingleRecipe/SingleRecipe";
import { useHomeRecipesQuery } from "../../store/recipes.api";
import { NavLink } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import RecipesRaw from "../../components/RecipesRaw/RecipesRaw";

const Home: React.FC = ()=> {

    const {isLoading, isError, error, data} = useHomeRecipesQuery()

    return <div className={s.container}>
            <div className={s.banner}>
                <img src={banner}/>
            </div>
            <div className={s.content}>
                <div className={s.title}>Recipes</div>
                {isLoading && <Preloader/>}
                <RecipesRaw data={data}/>
                {isError && <ErrorPage error={error}/>}
            </div>
    </div>;
}

export default Home;
