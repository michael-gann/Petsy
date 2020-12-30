import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from "../Item"

const BySeller = ({ user, sellerId }) => {
  const [item, setItem] = useState([])
  const { id } = useParams()
  const userId = user.id

  useEffect(() => {
   const getItems =  async () => {
      const res = await fetch(`/api/users/${sellerId}/pets/${id}`);
      const json = await res.json();
      console.log("----JSON----", json)
      setItem(json);
    }
    getItems();
  }, [id, sellerId]);


  return (
    <>
    <h3>More from this seller:</h3>
    {item.map(item => <Item item={item}></Item>)}
    </>
  )
};

export default BySeller;
