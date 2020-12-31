import React, { useState } from 'react'
import { ScoreContext } from "../../App"
import StarRatings from "react-star-ratings"


function ScoreAvg({ itemId }) {
    return (
        <ScoreContext.Consumer>
            {value => {
                return (<div>
                    <StarRatings
                        rating={value[`${itemId}`]["sumReviews"] / value[`${itemId}`]["countReviews"]}
                        starRatedColor="black"
                        starEmptyColor="grey"
                        numberOfStars={5}
                        starDimension="12px"
                        starSpacing="0px"
                        name="rating"
                    />
                    ({value[`${itemId}`]["countReviews"]})
                </div>)
            }}
        </ScoreContext.Consumer>
    )
}

export default ScoreAvg
