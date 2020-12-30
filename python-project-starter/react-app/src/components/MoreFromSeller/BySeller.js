import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from "../Item"

const BySeller = ({ user }) => {
  const [item, setItem] = useState([])
  const { id } = useParams()
  const userId = user.id

  useEffect(() => {
   const getItems =  async () => {
      const res = await fetch(`/api/users/${userId}/items/${id}`);
      const json = await res.json();
      console.log("----JSON----", json)
      setItem(json);
    }
    getItems();
  }, [id, userId]);


  return (
    <>
    {/* <div>hi</div> */}
    {item.map(item => <Item item={item}></Item>)}
    </>
  )
};

export default BySeller;
