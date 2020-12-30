import React from 'react'
import Pets from '../Pets/Pets'
import Items from '../ItemsList'

function Homepage() {
    return (
        <div className="page-container">
            <div className="pets">
                <Pets />
            </div>
            <div className="items">
                <Items />
            </div>
        </div>
    )
}

export default Homepage
