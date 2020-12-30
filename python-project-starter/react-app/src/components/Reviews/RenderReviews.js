import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import StarRatings from "react-star-ratings"

function RenderReviews() {
    const [reviews, setReviews] = useState([])
    const [date, setDate] = useState(null)
    const { id } = useParams()

    const dateStringManipulation = (review) => {
        let date = review.updatedAt
        //Wed, 30 Dec 2020 17:31:08 GMT
        let dateArr = date.split(' ')
        let newDate = `${dateArr[2]} ${dateArr[1]}, ${dateArr[3]}`
        return newDate
    }

    useEffect(() => {
        async function fetchReviews() {
            const res = await fetch(`/api/items/${id}/reviews`)
            const resData = await res.json()
            setReviews(resData)
        }
        fetchReviews()
    }, [])

    console.log(reviews[0])
    return (
        <>
            {reviews.map((review) => {
                return (
                    <div key={review.id}>
                        <div className="user-and-date">
                            {`${review.user.firstName} ${review.user.firstName}`} {dateStringManipulation(review)}
                        </div>
                        <div className="star-rating">
                            <StarRatings
                                rating={review.score}
                                starRatedColor="black"
                                starEmptyColor='grey'
                                numberOfStars={5}
                                starDimension="22px"
                                starSpacing="0px"
                                name="rating"
                            />
                        </div>
                        <div className="review-description">
                            {review.review}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default RenderReviews
