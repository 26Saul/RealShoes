import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max 90 Triple White",
      description: "Precio habitual: 120 – 150 €",
      image: "/img/shoes2.JPG",
    },
    {
      id: 2,
      name: "Puma Suede Classic rojo",
      description: "Precio habitual: 70 – 90 €",
      image: "/img/shoes3.JPG",
    },
    {
      id: 3,
      name: "Vans Old Skool amarillo",
      description: "Precio habitual: 75 – 95 €",
      image: "/img/shoes4.JPG",
    },
    {
      id: 4,
      name: "New Balance 574 (gris y azul)",
      description: "Precio habitual: 100 – 120 €",
      image: "/img/shoes6.JPG",
    },
    {
      id: 5,
      name: "Converse Chuck Taylor All Star High (verde)",
      description: "Precio habitual: 70 – 85 €",
      image: "/img/shoes7.JPG",
    },
    {
      id: 6,
      name: "Onitsuka Tiger Mexico 66 (naranja/azul)",
      description: "Precio habitual: 110 – 140 €",
      image: "/img/shoes9.JPG",
    },
    {
      id: 7,
      name: "Adidas Superstar (negro/blanco)",
      description: "Precio habitual: 90 – 110 €",
      image: "/img/shoes5.JPG",
    },
    {
      id: 8,
      name: "Nike Air Force 1 blanca",
      description: "Precio habitual: 110 - 130 €",
      image: "/img/shoes1_.jpg",
    },
    {
      id: 9,
      name: "Nike Air Jordan 1 Mid azul/blanco",
      description: "Precio habitual: 130 – 150 €",
      image: "/img/shoes8.JPG",
    },
  ];

  return (
    <div className="home-container">
      <h1>Bienvenido a RealShoes</h1>
      <p className="home-subtitle">
        Bienvenido a RealShoes, tu tienda online especializada en zapatillas
        para el día a día.
      </p>
      <p className="home-subtitle">
        Estos son algunos de nuestros productos:
      </p>

      <div className="shoes-grid">
        {shoes.map((shoe, index) => (
          <>
            <div className="shoe-card">
              <img src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p>{shoe.description}</p>
            </div>

            {/* Texto después de cada 6 productos */}
            {(index + 1) % 6 === 0 && (
              <div className="shoe-row-text">
                <p>Estos son nuestros productos estrella:</p>
              </div>
            )}
          </>
        ))}
      </div>

      <p className="home-contact-text"> Si le interesa algo, contacte con nosotros:</p>

      {/* Botón Contact */}
      <div className="home-contact-button-wrapper">
        <Link to="/contact" className="home-contact-button">
          Ir a Contacto
        </Link>
      </div>
    </div>
  );
}

export default Home;
