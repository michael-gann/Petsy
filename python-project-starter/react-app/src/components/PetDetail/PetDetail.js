import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { useParams } from 'react-router-dom'

function PetDetail() {
    const [pet, setPet] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            console.log(id)
            const res = await fetch(`/api/pets/${id}`);
            const resData = await res.json();
            setPet(resData);
            console.log(resData)
        }
        fetchData()
    }, [id])
    return (
        <div>
            <div className="image-container">
                <img src={pet.imgurl} alt="Pet pic" />
            </div>
            <div className="details">
                {/* {pet.user.firstName} {pet.user.lastName} */}
                {/* add the ratings component here when finished */}
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
    )
}

export default PetDetail
