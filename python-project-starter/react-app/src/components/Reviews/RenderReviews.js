import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import StarRatings from "react-star-ratings"

function RenderReviews() {
    const [reviews, setReviews] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function fetchReviews() {
            const res = await fetch(`/api/items/${id}/reviews`)
            const resData = await res.json()
            setReviews(resData)
        }
        fetchReviews()
    }, [])
    console.log(reviews)
    return (
        <>
            {reviews.map((review) => {
                return (
                    
                    <StarRatings
                        rating={review.score}
                        starRatedColor="black"
                        numberOfStars={5}
                        name="rating"
                    />
                )
            })}
            {/* <StarRatings
                rating={review.score}
                starRatedColor="black"
                numberOfStars={5}
                name="rating"
            /> */}
        </>
    )
}

export default RenderReviews
