import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function RenderReviews() {
    const [reviews, setReviews] = useState([])
    const params = useParams()
    console.log(params)
    useEffect(() => {
        async function fetchReviews() {

        }
    }, [])
    return (
        <div>

        </div>
    )
}

export default RenderReviews
