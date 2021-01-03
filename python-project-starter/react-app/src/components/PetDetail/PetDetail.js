import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { useParams } from 'react-router-dom'
import PetBySeller from '../MoreFromSeller/PetBySeller'
import AddToCart from "../ShoppingCart/AddToCart";
// import RemoveFromCart from "../ShoppingCart/RemoveFromCart";

import "./PetDetail.css"

function PetDetail({ user, isAuthenticated }) {
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
                    <h3>{pet.name}</h3>
                    <p>
                        {pet.description}
                    </p>
                    <div className="pet-specifics">
                        {`${pet.name}'s Details:`}
                    </div>
                    <div className="pet-detail-field-value">
                        <div className="pet-detail-field">Breed:</div>
                        <div className="pet-detail-value">{pet.breed}</div>
                    </div>
                    <div className="pet-detail-field-value">
                        <div className="pet-detail-field">Age:</div>
                        <div className="pet-detail-value">{`${pet.age} years old`}</div>
                    </div>
                    <div className="pet-detail-field-value">
                        <div className="pet-detail-field">Weight:</div>
                        <div className="pet-detail-value">{`${pet.weight} lbs`}</div>
                    </div>
                    <div className="pet-detail-field-value">
                        <div className="pet-detail-field">Gender:</div>
                        <div className="pet-detail-value">{pet.gender}</div>
                    </div>
                    <div className="pet-detail-field-value">
                        <div className="pet-price">
                            <NumberFormat value={pet.price} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </div>
                    </div>
                    {isAuthenticated && <div className="cart-button-container">
                        <AddToCart item={pet} />
                        {/* <RemoveFromCart id={pet.id} /> */}
                    </div>}
                </div>
            </div>
            <div className="pet-detail-more-container">
                <div className="pet-detail-more">
                    <PetBySeller user={user} sellerId={pet.sellerId} />
                </div>
            </div>

        </div>
    )
}

export default PetDetail
