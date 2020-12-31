import React from 'react'
import Item from '../Item'
import Pet from '../Pets/Pet'

const Search = ({ results }) => {

  return (

    <>

    {results[0].map(item => <Item item={item} key={item.id}></Item>)}
    {results[1].map(pet => <Pet pet={pet} key={pet.id}></Pet>)}

    </>
  )
}

export default Search;
