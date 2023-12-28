import React, { useEffect } from "react";

function ToyCard({ toy, id, name, image, likes, onDeleteItem }) {

  function handleDelete(){
    // console.log(toy.id)
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then(() => onDeleteItem(toy))
  }

  return (
    <div className="card" key={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
