import React from 'react'
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';

function Pet({ pet }) {
    const history = useHistory()
    const handleClick = () => {
        return history.push(`/pets/${pet.id}`)
        // return <Redirect to={`/pet/${pet.id}`} />
    }
    return (
        <>
            <div className="image-container" onClick={handleClick}>
                <img src={pet.imgurl} alt="Pet pic" />
            </div>
            <div className="details" onClick={handleClick}>
                {pet.user.firstName} {pet.user.lastName}
                {pet.name}
                {pet.breed}
                <NumberFormat value={pet.price} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
        </>
    )
}

export default Pet
