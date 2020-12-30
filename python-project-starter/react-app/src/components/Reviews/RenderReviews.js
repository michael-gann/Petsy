import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function RenderReviews() {
    const [reviews, setReviews] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function fetchReviews() {
            const res = await fetch(`/api/items/${id}/reviews`)
            const resData = await res.json()
            console.log(resData)
        }
        fetchReviews()
    }, [])
    return (
        <div>

        </div>
    )
}

export default RenderReviews
