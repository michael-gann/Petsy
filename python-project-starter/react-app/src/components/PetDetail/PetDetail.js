import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

function PetDetail() {
    const [pet, setPet] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/pets");
            const resData = await res.json();
            setPet(resData);
        }
        fetchData()
    }, [])
    return (
        <div>

        </div>
    )
}

export default PetDetail
