import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const api = "http://localhost:6001/listings"

  const [image, setImage] = useState([])
  const [searchTerm, setSearchTerm] = useState("")  
    console.log(image)

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(images => setImage(images))
    }, []) 

    const filteredGreg = image.filter(word => word.description.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">
      <Header image={image} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <ListingsContainer image={filteredGreg}/>
    </div>
  );
}

export default App;
