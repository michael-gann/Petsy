import React, { useState, useEffect } from "react";


function Pets() {
    const [pets, setPets] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/pets/")
            const resData = await res.json();
            console.log(resData)
            // setPets(resData)
        }
    })
    return (
        <div>
            <div className="header-text">
                <h2>PETS</h2>
            </div>
            <div className="pet-components">
                {/* import pet component here */}
            </div>
        </div>
    )
}

export default Pet
