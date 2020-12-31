import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NumberFormat from 'react-number-format';
import AddToCart from './ShoppingCart/AddToCart';
import RemoveFromCart from './ShoppingCart/RemoveFromCart';
import RenderReviews from './Reviews/RenderReviews'
import ItemBySeller from "./MoreFromSeller/ItemBySeller"

function ItemDetail() {
  const [item, setItem] = useState([]);
  const [seller, setSeller] = useState('');
  const { id } = useParams();

  // console.log("ID:", id)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/items/${id}`);
      const itemData = await response.json();
      setItem(itemData)
    }
    fetchData();
  }, [id]);

  // console.log(item)

  // useEffect(() => {
  //   async function fetchData() {
  //     const sellerId = item.sellerId
  //     const response = await fetch(`/api/users/${sellerId}`);
  //     const sellerData = await response.json();
  //     setSeller(sellerData)
  //   }
  //   fetchData();
  // }, [item]);

  // console.log(seller)

  return (
    <>
      <div>
        <img src={item.imgurl}></img>
      </div>
      <section>
        <div>
          <h6>{seller.firstName} {seller.lastName}</h6>
        </div>
        <div>
          <h3>{item.name}</h3>
        </div>
        <div>
          <p>{item.description}</p>
        </div>
        <div>
          <NumberFormat
            value={item.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            renderText={value => <div>{value}</div>}
          />
        </div>
      </section>
<<<<<<< HEAD
  <div>
    <AddToCart item={item} />
    <RemoveFromCart id={item.id} />
=======
      <RenderReviews />
    <div>
      <ItemBySeller sellerId={item.sellerId} />
>>>>>>> master
    </div>
    </>
  )
}

export default ItemDetail
