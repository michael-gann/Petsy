import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import StarRatings from "react-star-ratings"
import _ from "lodash"

function PostReview({ user, setReviews, reviews }) {
    const [score, setScore] = useState(0)
    const [review, setReview] = useState('')
    const userId = user.id
    const params = useParams()
    const itemId = params.id

    const submitReview = async (e) => {
        e.preventDefault()
        const reviewFetch = await fetch("/api/reviews/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                itemId,
                score,
                review,
            }),
        });
        const reviewData = await reviewFetch.json();
        console.log(reviewData)
        if (!reviewData.errors) {
            let reviewsDupe = _.cloneDeep(reviews)
            console.log(reviewsDupe)
            reviewsDupe.push(reviewData)
            setReviews(reviewsDupe)
        }

    }

    const changeScore = (rating) => {
        setScore(rating)
    }

    const updateReview = (e) => {
        setReview(e.target.value)
    }
    return (
        <form onSubmit={submitReview}>
            <h3>Write Your Review</h3>
            <StarRatings
                rating={score}
                changeRating={changeScore}
                starRatedColor="black"
                starEmptyColor="grey"
                starHoverColor="black"
                numberOfStars={5}
                starDimension="22px"
                starSpacing="0px"
                name="rating"
            />
            <div>
                <label htmlFor="review">Review</label>
            </div>
            <div className="review">
                <textarea name="review"
                    id="review"
                    cols="30"
                    rows="10"
                    onChange={updateReview}
                    value={review}
                    required={true}
                ></textarea>
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default PostReview
