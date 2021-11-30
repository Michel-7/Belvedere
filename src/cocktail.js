import React from 'react'

function Cocktail({img,name}) {
    return (
        <>
        <div className='cocktail'>
            <img src={img}/>
            <h2>{name}</h2>
        </div>
        
        </>
    )
}

export default Cocktail
