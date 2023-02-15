import React from "react";

type Props ={
    children:string
}

const Banner = ({children}:Props) => {
    return <div className='banner'>
        {children}
    </div>;
}

export default Banner;
