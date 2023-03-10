import React from "react";
import s from './Home.module.css'
import banner from '../../assets/recipes-banner.jpeg'
import SingleRecipe from "../../components/SingleRecipe/SingleRecipe";
import { useRandomRecipesQuery } from "../../store/recipes.api";
import { NavLink } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import RecipesRaw, { RecipesRawForHome } from "../../components/RecipesRaw/RecipesRaw";

const Home: React.FC = ()=> {

    const {isLoading, isError, error, data} = useRandomRecipesQuery()

    return <div className={s.container}>
            <div className={s.banner}>
                <img src={banner}/>
            </div>
            <div className={s.content}>
                <div className={s.title}>Recipes</div>
                {isLoading && <Preloader/>}
                <RecipesRawForHome data={data}/>
                {isError && <ErrorPage error={error}/>}
            </div>
    </div>;
}

export default Home;
