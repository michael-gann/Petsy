import React from 'react'

function Pet({ pet }) {
    return (
        <div>
            <div className="image-container">
                <img src={pet.imgurl} alt="Pet pic" />
            </div>
            <div className="details">
                {pet.sellerId.name}
                {pet.name}
                {pet.breed}
                {pet.price}
            </div>
        </div>
    )
}

export default Pet
