import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css';

const NavBar = ({ setAuthenticated, isAuthenticated, setResults }) => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const itemRes = await fetch('/api/items');
      const itemResData = await itemRes.json();

      const petRes = await fetch('/api/pets');
      const petResData = await petRes.json();

      let itemsAndPets = [];
      itemsAndPets.push(itemResData);
      itemsAndPets.push(petResData);

      setData(itemsAndPets);
    }
    fetchAll();
  }, []);

  const handleSubmit = () => {
    const itemFilteredResults = data[0].filter(item => item.name.includes(search));
    const petFilteredResults = data[1].filter(pet => pet.name.includes(search));

    let petsAndItemsFiltered = [];
    petsAndItemsFiltered.push(itemFilteredResults);
    petsAndItemsFiltered.push(petFilteredResults);
    setResults(petsAndItemsFiltered);
    setSearch("");
    return history.push('/search');
  };

  return (
    <nav className="nav navbar-container">
      <div className="upper-section">
        <ul className="nav navbar-items">
          <li className="nav navbar-item">
            <NavLink to="/" exact={true} activeClassName="active">
              Petsy
          </NavLink>
          </li>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyUp={
            (e) => {
              if (e.key === 'Enter') {
                return handleSubmit()
              }
            }}
            placeholder="Search for anything"></input>
          {!isAuthenticated &&
            <>
              <li className="nav navbar-item">
                <NavLink to="/login" exact={true} activeClassName="active">
                  Login
          </NavLink>
              </li>
              <li className="nav navbar-item">
                <NavLink to="/sign-up" exact={true} activeClassName="active">
                  Sign Up
          </NavLink>
              </li>
            </>}
        </ul>
        {isAuthenticated &&

          <div className="dropdown">
            <button className="dropbtn">You
          <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
          </div>}
      </div>
      <div className="lower-section">
        <div>
          <NavLink to="/pets" exact={true}>Pets</NavLink>
        </div>
        <div>
          <NavLink to="/items" exact={true}>Products</NavLink>
        </div>
      </div>
      <a rel="noopener noreferrer" href="/cart">
        <i className="fas fa-shopping-cart"></i>
      </a>
    </nav>
  );
};

export default NavBar;
