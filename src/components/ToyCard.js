import React, { useState } from "react";

function ToyCard({ toy, id, name, image, likes, onDeleteItem }) {
  const [newLikes, setNewLikes] = useState(likes)
  //setting newLikes state to current like count

  function handleDelete() {
    
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(toy))
  }

  function handleLikeClicks() {
    // console.log(`prefetch newLikes: ${newLikes}`)
    // setNewLikes(newLikes + 1)
    // console.log(`NewLikes when first fires: ${newLikes}`)

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: newLikes + 1 })
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        setNewLikes(updatedToy.likes)
        // console.log(updatedToy.likes)
      })

      // console.log(`NewLikes when at end of function: ${newLikes}`)
      // debugger
  }

  return (
    <div className="card" key={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{newLikes} Likes </p>
      <button onClick={handleLikeClicks} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
