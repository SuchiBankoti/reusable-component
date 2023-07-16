import React from "react";

const ItemCard = (props) => {
  const { imageUrl, description } = props.item;
  // i have added a fallback function which will replace the source url in case of an error
  function addDefaultSrc(event) {
    console.log("change image");
    event.target.src =
      "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  }
  return (
    <li className="item-card">
      <div className="image-container">
        <img
          onError={addDefaultSrc}
          className="image"
          src={imageUrl}
          alt="random-item"
        />
      </div>
      <div className="text-body">
        <p>{description}</p>
      </div>
    </li>
  );
};
const ResuableComponent = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item, i) => (
        <ItemCard item={item} key={i} />
      ))}
    </ul>
  );
};
export default ResuableComponent;
