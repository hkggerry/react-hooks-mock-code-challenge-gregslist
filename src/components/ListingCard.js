import React, {useState} from "react";

function ListingCard({image}) {
  const [isClicked, setIsClicked] = useState(false)
  
  function handleClick(){
      setIsClicked ((isClicked) => !isClicked);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image.image} alt={"description"} />
      </div>
      <div className="details" >
        {/* {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )} */}
        <button onClick={handleClick}>{isClicked ? '★' : '☆'}</button>
        <strong>{image.description}</strong>
        <span> · {image.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
    
  );
}


export default ListingCard;
