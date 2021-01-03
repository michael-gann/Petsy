import React from "react";
import Item from "../Item";
import Pet from "../Pets/Pet";

import "./search.css";

const Search = ({ results }) => {
  if (!results) {
    return null;
  }

  return (
    <>
      {results.length > 1 ? (
        <div className="search-results">
          {results[0].map((item) => (
            <Item item={item} key={item.id}></Item>
          ))}
          {results[1].map((pet) => (
            <Pet pet={pet} key={pet.id}></Pet>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <div>Did you enter a search term in the bar above?</div>
        </div>
      )}
    </>
  );
};

export default Search;
