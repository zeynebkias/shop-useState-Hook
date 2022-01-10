import React from 'react'

function Shop({title, prix , addEvent}) {

    const update = (e) => {

        addEvent(prix)
    }
    
    return (
        <div>
            <h3>{title}</h3>
            <p style={{color: '#E94C86', fontWeight: 'bold'}}>{prix}</p>
            <button onClick={update}>Ajouter au pannier</button>
        </div>
    )
}

export default Shop;
