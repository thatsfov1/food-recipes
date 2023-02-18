import React from 'react'

const ErrorPage = ({error}:{error?:any}) => {
  return (
    <div style={{width:'82vw', height:'70vh', display:'flex',flexDirection:'column', gap:'20px',  justifyContent:'center', alignItems:'center'}}>
      <div style={{ fontSize:'48px' ,color:'#E85659' ,fontWeight:'bold'}}>Oops!</div>
       <div style={{color:'#2d2d2d', textTransform:'uppercase',  } }>We're sorry, something went wrong</div>
        {error && <div style={{color:'#E85659'}}>
            error
        </div>}
    </div>
  )
}

export default ErrorPage
