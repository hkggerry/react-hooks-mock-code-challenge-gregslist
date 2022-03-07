import React, {useEffect, useState}from "react";
import ListingCard from "./ListingCard";

const api = "http://localhost:6001/listings"

function ListingsContainer() {
  const [image, setImage] = useState([])  
  console.log(image)

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(images => setImage(images))
}, []) 


  return (
    <main>
      <ul className="cards">
        <ListingCard image={image}/>
        
      </ul>
    </main>
  );
}

export default ListingsContainer;
