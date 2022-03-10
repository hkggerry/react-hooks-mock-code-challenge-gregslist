import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({ image }) {

  const imageData = image.map((eachImage) => {  
  return <ListingCard key={eachImage.id} image={eachImage} />
  })

  return (
    <main>

      <ul className="cards">
        {imageData}
      </ul>
    </main>
  );
}

export default ListingsContainer;
