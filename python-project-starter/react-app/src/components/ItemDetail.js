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
  const [mounted, setMounted] = useState(false);

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
      setSeller(sellerData);
    }
    fetchData();
  }, [item]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [item]);

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
          <div className="item-detail-name">
            <h3>{item.name}</h3>
          </div>
          <div className="item-detail-description">
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
        <div
          className={
            mounted ? "new-item-more-by-seller" : "item-more-by-seller"
          }
        >
          <ItemBySeller user={user} sellerId={item.sellerId} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
