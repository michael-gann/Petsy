import React from 'react'
import { NavLink } from "react-router-dom"
import BottomFooter from "./BottomFooter"

function Footer() {
    return (
        <div className="footer">
            <div className="top-footer">
                <div className="shop">
                    <h2>
                        <NavLink to="/">Shop</NavLink>
                    </h2>
                    <h4>
                        <NavLink to="/pets">Pets</NavLink>
                    </h4>
                    <h4>
                        <NavLink to="/items">Products</NavLink>
                    </h4>
                </div>
                <div className="about">
                    <h2>
                        <a rel="noopener noreferrer" href="https://github.com/michael-gann/Petsy/wiki" target="_blank">About</a>
                    </h2>
                    <h4>
                        <a rel="noopener noreferrer" href="https://github.com/michael-gann/Petsy/blob/master/readme.md" target="_blank">Project README</a>
                    </h4>
                    <h4>
                        <a rel="noopener noreferrer" href="https://github.com/michael-gann/Petsy/wiki/6.-Database-Schema" target="_blank">Project Database Schema</a>
                    </h4>
                </div>
                <div className="team">
                    <h2 className="team">Team</h2>
                    <h4>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/danielpong/" target="_blank">Danny Pong</a>
                    </h4>
                    <h4>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-gann-1a2161201/" target="_blank">Michael Gann</a>
                    </h4>
                    <h4>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/nickfmatthews/" target="_blank">Nick Matthews</a>
                    </h4>
                    <h4>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/ryan-young-b67a7aab/" target="_blank">Ryan Young</a>
                    </h4>
                </div>
            </div>
            <div className="bottom-footer">
                <BottomFooter />
            </div>
        </div>
    )
}

export default Footer
