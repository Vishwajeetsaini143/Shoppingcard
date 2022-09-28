import React from 'react'
import './Datafilter.css'
const Datafilter = ({handleFilter}) => {


    const datafilter=["jewelery","electronics","men's clothing","women's clothing"]
  
    
 

  return (
    <div className='data-filter'>
{
    datafilter.map((datafilter)=>{

        return(
            <div className='data-filter-p'>
            <p onClick={()=>handleFilter(datafilter)}>{datafilter}</p>
            </div>
        )
    }
)}

    </div>
  )
}

export default Datafilter