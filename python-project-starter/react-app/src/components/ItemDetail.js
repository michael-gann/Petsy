import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NumberFormat from "react-number-format";
import AddToCart from "./ShoppingCart/AddToCart";
import RemoveItemFromCart from "./ShoppingCart/RemoveItemFromCart";
import RenderReviews from "./Reviews/RenderReviews";
import ItemBySeller from "./MoreFromSeller/ItemBySeller";
import PostReview from "./Reviews/PostReview";
import ScoreAvg from "./Reviews/ScoreAvg";

import "./itemsList.css";

function ItemDetail({ user, isAuthenticated }) {
  const [reviews, setReviews] = useState([]);
  const [item, setItem] = useState([]);
  const [seller, setSeller] = useState("");
  const { id } = useParams();

  // console.log("ID:", id)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/items/${id}`);
      const itemData = await response.json();
      setItem(itemData);
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      const sellerId = item.sellerId;
      const response = await fetch(`/api/users/${sellerId}`);
      const sellerData = await response.json();
      console.log("SELLER DATA", sellerData);
      setSeller(sellerData);
    }
    fetchData();
  }, [item]);

  console.log(seller);
  console.log("ITEM>SELLERID", item.sellerId);

  return (
    <div className="item-detail-container">
      <div className="inner-item-detail-container">
        <div className="img-container">
          <img src={item.imgurl}></img>
        </div>
        <section className="details-container">
          <div className="seller-first-last">
            <h6>
              {seller.firstName} {seller.lastName}
            </h6>

            <div className="score-average">
              <ScoreAvg itemId={id} />
            </div>
          </div>
          <div>
            <h3>{item.name}</h3>
          </div>
          <div>
            <p>{item.description}</p>
          </div>
          <div className="number-format">
            <NumberFormat
              value={item.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value) => <div>{value}</div>}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
          {isAuthenticated && (
            <div className="cart-button-container">
              <AddToCart item={item} />
              <RemoveItemFromCart id={item.id} />
            </div>
          )}
        </section>
      </div>
      <div className="bottom-container">
        <div className="reviews-container">
          <div className="reviews">
            <RenderReviews reviews={reviews} setReviews={setReviews} />
            {isAuthenticated && (
              <PostReview
                user={user}
                reviews={reviews}
                setReviews={setReviews}
              />
            )}
          </div>
        </div>
        <div className="item-more-by-seller">
          <div className="more-by-seller">
            <ItemBySeller user={user} sellerId={item.sellerId} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default ItemDetail;
