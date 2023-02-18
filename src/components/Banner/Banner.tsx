import React from "react";
import './Banner.css'


const Banner = ({children}:{children:string}) => {
    return <div className='banner'>
        <span>
            {children}
        </span>
    </div>;
}

export default Banner;
