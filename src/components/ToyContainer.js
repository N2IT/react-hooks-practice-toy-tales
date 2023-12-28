import React, {useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  const [likes, setLikes] = useState(0)

  function onDeleteItem(item){
    const updatedToys = toys.filter((toy) => toy.id !== item.id)
    setToys(updatedToys)
  }

  // function increaseLikes(item){
  //   console.log(item)
  //   return item.likes++
  // }

  return (
    <div id="toy-collection">{toys.map((toy) => (
      <ToyCard toy={toy} key={toy.id} name={toy.name} image={toy.image} likes={toy.likes} onDeleteItem={onDeleteItem} />
    ))}</div>
  );
}

export default ToyContainer;
