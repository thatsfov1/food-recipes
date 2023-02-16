import React from "react";
import s from './Home.module.css'
import banner from '../../assets/recipes-banner.jpeg'

const Home: React.FC = ()=> {
    return <div className={s.container}>
            <div className={s.banner}>
                <img src={banner}/>
            </div>
    </div>;
}

export default Home;
