import React from 'react'

const MapIteration =()=>{
    const arr=["hello js","angular js","react js","javascript"]
    const filter=arr.filter(name=>name.includes('r'));
      return(
            <div>
                {
                filter.map(value=><li>{value}</li>)
                }
           </div>
      )
}
export default MapIteration