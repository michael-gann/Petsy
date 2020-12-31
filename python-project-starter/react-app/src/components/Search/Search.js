import React from 'react'
import Item from '../Item'

const Search = ({ results }) => {

  return (

    <>
    {results.map(item => <Item item={item} key={item.id}></Item>)}
    </>
  )
}

export default Search;
