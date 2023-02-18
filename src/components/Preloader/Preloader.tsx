import React from 'react'
import preloader from '../../assets/loading.svg'

const Preloader = () => {
  return (
      <div style={{display:'flex', width:'82vw', height:'50vh', justifyContent:'center', alignItems:'center' }}>
         <img src={preloader} alt='preloader'/>
      </div>
  )
}

export default Preloader
