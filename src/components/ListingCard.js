import React from "react";

function ListingCard({image}) {

  const imageDescription = image.map((eachImage) => {    
    return(eachImage.description)
  })

  const imageLocation = image.map((eachImage) => {    
    return(eachImage.location)
  })

  const imageImage = image.map((eachImage) => {    
    return(eachImage.image)
  })


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={imageImage} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{imageDescription}</strong>
        <span> · {imageLocation}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
    
  );
}


export default ListingCard;
