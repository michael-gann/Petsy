import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignUpForm";
import { NumCartContext } from "../App";
import "./NavBar.css";

const NavBar = ({ setAuthenticated, isAuthenticated, setResults }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const itemRes = await fetch("/api/items");
      const itemResData = await itemRes.json();

      const petRes = await fetch("/api/pets");
      const petResData = await petRes.json();

      let itemsAndPets = [];
      itemsAndPets.push(itemResData);
      itemsAndPets.push(petResData);

      setData(itemsAndPets);
    };
    fetchAll();
  }, []);

  const handleSubmit = () => {
    const itemFilteredResults = data[0].filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    const petFilteredResults = data[1].filter((pet) =>
      pet.name.toLowerCase().includes(search.toLowerCase())
    );

    let petsAndItemsFiltered = [];
    petsAndItemsFiltered.push(itemFilteredResults);
    petsAndItemsFiltered.push(petFilteredResults);
    setResults(petsAndItemsFiltered);
    setSearch("");
    return history.push("/search");
  };

  return (
    <nav className="nav navbar-container">
      <div className="upper-section">
        <ul className="nav navbar-items">
          <li className="nav navbar-item">
            <div className="logo">
              <NavLink to="/" exact={true} activeClassName="active">
                <img
                  alt="petsy logo"
                  src="https://i.imgur.com/zEVkA7w.png"
                ></img>
              </NavLink>
            </div>
          </li>
          <input
            className="searchbar"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                return handleSubmit();
              }
            }}
            placeholder="Search for anything"
          ></input>
          {isAuthenticated ? (
            <>
              <div className="cart-user-container">
                <div className="dropdown">
                  <button className="dropbtn">
                    <div className="you-button">You</div>
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <LogoutButton setAuthenticated={setAuthenticated} />
                  </div>
                </div>

                <div className="cart">
                  <a rel="noopener noreferrer" href="/cart">
                    <i className="fas fa-shopping-cart fa-2x">
                      <NumCartContext.Consumer>
                        {(value) => {
                          if (value)
                            return (
                              <span class="cart-basket d-flex align-items-center justify-content-center">
                                {value}
                              </span>
                            );
                          else
                            return (
                              <span class="cart-basket d-flex align-items-center justify-content-center">
                                0
                              </span>
                            );
                        }}
                      </NumCartContext.Consumer>
                    </i>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="login-container">
              <li className="nav login">
                <LoginForm
                  authenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
              </li>
              <li className="nav sign-up">
                <SignUpForm
                  authenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
              </li>
            </div>
          )}
        </ul>
        <div className="lower-section">
          <div>
            <NavLink to="/pets" exact={true}>
              Pets
            </NavLink>
          </div>
          <div>
            <NavLink to="/items" exact={true}>
              Items
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
