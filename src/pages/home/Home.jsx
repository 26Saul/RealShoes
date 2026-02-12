import React from 'react';
import './Home.css';
import Map from "../../components/Map.jsx";


function Home() {

  const shoes = [
    {
      id: 1,
      name: "Air Max",
      description: "Comfortable running shoes",
      image: "https://picsum.photos/300/200?1"
    },
    {
      id: 2,
      name: "Classic White",
      description: "Perfect for everyday wear",
      image: "https://picsum.photos/300/200?2"
    },
    {
      id: 3,
      name: "Street Style",
      description: "Modern urban design",
      image: "https://picsum.photos/300/200?3"
    }
  ];

  return (
    <div className="home-container">
      <h1>Welcome to RealShoes</h1>
      <p>This is the home page</p>

      <div className="shoes-grid">
        {shoes.map(shoe => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>{shoe.description}</p>
          </div>
        ))}
      </div>
      <h2>Our Location</h2>
      <Map />
    </div>
  );
}

export default Home;
