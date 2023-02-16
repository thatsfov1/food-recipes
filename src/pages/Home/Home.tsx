import React from "react";
import s from './Home.module.css'
import banner from '../../assets/recipes-banner.jpeg'
import {Hit} from '../../models/models'
import {useRandomRecipesQuery, useSearchRecipesQuery } from "../../store/recipes.api";
import SingleRecipe from "../../components/SingleRecipe";

const Home: React.FC = ()=> {

    const {isLoading,data,isError } = useRandomRecipesQuery()

    return <div className={s.container}>
            <div className={s.banner}>
                <img src={banner}/>
            </div>
            <div className={s.content}>
                <div className={s.title}>Recipes</div>
                <div className={s.recipes}>
                    {data.hits.map((item:Hit) => <SingleRecipe key={item.recipe.uri} hit={item}/>)}
                </div>
            </div>
    </div>;
}

export default Home;
