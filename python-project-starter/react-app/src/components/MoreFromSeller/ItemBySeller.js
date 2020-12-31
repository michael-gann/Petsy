import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from "../Item"

const ItemBySeller = ({ user, sellerId }) => {
  const [item, setItem] = useState([])
  const { id } = useParams()

  useEffect(() => {
   const getItems =  async () => {
      const res = await fetch(`/api/users/${sellerId}/items/${id}`);
      const json = await res.json();
      setItem(json);
    }
    getItems();
  }, [id, sellerId]);


  return (
    <>
    <h3>More from this seller:</h3>
    {item.map(item => <Item key={item.id} item={item}></Item>)}
    </>
  )
};

export default ItemBySeller;
