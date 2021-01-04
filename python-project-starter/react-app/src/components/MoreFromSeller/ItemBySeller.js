import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Slider from "react-slick";
import Item from "../Item";
import Carousel from "react-material-ui-carousel";

const ItemBySeller = ({ user, sellerId }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const handleClick = (e) => {
    // history.push(`/pets/${id}`)
    return <Redirect to={`/items/${id}`} />;
  };

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(`/api/users/${sellerId}/items/${id}`);
      const json = await res.json();
      setItems(json);
    };
    getItems();
  }, [id, sellerId]);

  const itemArray = items.map((item) => <div key={item.id}>{item.id}</div>);

  return (
    <div className="more-by-sellers">
      <h3>More from this seller:</h3>
      <Carousel autoPlay={false}>
        {items.map((item, index) => (
          <Item item={item} key={index}></Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ItemBySeller;
