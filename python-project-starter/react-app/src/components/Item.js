import React from 'react'

function Item({ item }) {
  return (
    <div>
      <div>
        <img src={item.imgurl}></img>
      </div>
      <div>
        {item.name}
        {item.price}
      </div>
    </div>
  )
}

export default Item
