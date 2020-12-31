import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NumberFormat from 'react-number-format';
import AddToCart from './ShoppingCart/AddToCart';
import RemoveFromCart from './ShoppingCart/RemoveFromCart';
import RenderReviews from './Reviews/RenderReviews'
import ItemBySeller from "./MoreFromSeller/ItemBySeller"
import PostReview from "./Reviews/PostReview"
import ScoreAvg from "./Reviews/ScoreAvg"


function ItemDetail({ user, isAuthenticated }) {
  const [reviews, setReviews] = useState([])
  const [item, setItem] = useState([]);
  const [seller, setSeller] = useState('');
  const { id } = useParams();
  console.log(reviews)

  // console.log("ID:", id)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/items/${id}`);
      const itemData = await response.json();
      setItem(itemData)
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      const sellerId = item.sellerId
      const response = await fetch(`/api/users/${sellerId}`);
      const sellerData = await response.json();
      setSeller(sellerData)
    }
    fetchData();
  }, [item]);

  // console.log(seller)

  return (
    <>
      <div>
        <img src={item.imgurl}></img>
      </div>
      <section>
        <div>
          <div>
            <h6>{seller.firstName} {seller.lastName}</h6>
          </div>
          <div>
            <ScoreAvg itemId={id} />
          </div>
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
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </div>
      </section>
      <div>
        <AddToCart item={item} />
        <RemoveFromCart id={item.id} />
        <div className="reviews">
          <RenderReviews reviews={reviews} setReviews={setReviews} />
          {isAuthenticated && <PostReview user={user} reviews={reviews} setReviews={setReviews} />}
        </div>
        <div>
          <ItemBySeller sellerId={item.sellerId} />
        </div>
      </div>
    </>
  )
}

export default ItemDetail
