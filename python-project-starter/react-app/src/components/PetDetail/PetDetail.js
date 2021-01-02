import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { useParams } from 'react-router-dom'
import PetBySeller from '../MoreFromSeller/PetBySeller'

import "./PetDetail.css"

function PetDetail({ user }) {
    const [pet, setPet] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            // console.log(id)
            const res = await fetch(`/api/pets/${id}`);
            const resData = await res.json();
            setPet(resData);
            // console.log(resData)
        }
        fetchData()
    }, [id])

    return (
        <div className="pet-detail-container">
            <div className="pet-detail-img-info">
                <div className="pet-detail-image-container">
                    <img className="image-pet" src={pet.imgurl} alt="Pet pic" />
                </div>
                <div className="details">
                    <h2>{pet.name}</h2>
                    <div>
                        {pet.description}
                    </div>
                    <div>
                        Breed: {pet.breed}
                    </div>
                    <div>
                        Age: {`${pet.age} years old`}
                    </div>
                    <div>
                        Weight: {`${pet.weight} lbs`}
                    </div>
                    <div>
                        Gender: {pet.gender}
                    </div>
                    <div>
                        Price: <NumberFormat value={pet.price} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </div>
                </div>
            </div>
            <div className="pet-detail-more">
                <PetBySeller user={user} sellerId={pet.sellerId} />
            </div>

        </div>
    )
}

export default PetDetail
