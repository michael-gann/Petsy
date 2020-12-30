import React, { useState, useEffect } from "react";
import Pet from './Pet'


function Pets() {
    const [pets, setPets] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/pets")
            const resData = await res.json();
            setPets(resData)
        }
        fetchData()
    }, [])
    return (
        <div>
            <div className="header-text">
                <h2>PETS</h2>
            </div>
            <div className="pet-components">
                {pets.map((pet) => {
                    return (
                        <div key={pet.id}>
                            <Pet pet={pet} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pets
