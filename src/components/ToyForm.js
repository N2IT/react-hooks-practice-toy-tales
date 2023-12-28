import React, { useState } from "react";

function ToyForm({ addNewToy }) {  
  const [ name, setName ] = useState("")
  const [ image, setImage ] = useState("")
  
  function handleSubmit(e){
    e.preventDefault()
    const newToy = {
      name: name,
      image: image,
      likes: 0,
    }
    // console.log(newToy)
    fetch(`http://localhost:3001/toys`, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/JSON",
      },
      body: JSON.stringify(newToy)
    })
    .then((res) => res.json())
    .then((toy) => addNewToy(toy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
