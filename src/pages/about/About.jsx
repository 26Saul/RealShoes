import React from "react";
import "./About.css";
import Map from "../../components/Maps.jsx";

function About() {
  return (
    <main className="about-container">
      <h1>Sobre RealShoes</h1>
      <p>
        En RealShoes seleccionamos cuidadosamente las mejores zapatillas para el día a día, 
        apostando por un equilibrio perfecto entre comodidad, calidad y estilo urbano. 
        Nuestro objetivo es ofrecer modelos versátiles que se adapten al ritmo real de las personas, 
        combinando diseño actual con funcionalidad para cualquier ocasión.
        Nos enfocamos en sneakers pensadas para el uso diario, ideales tanto para looks casual como urbanos, 
        siempre siguiendo las tendencias actuales sin renunciar al confort que necesitas en tu rutina.
      </p>

      <section className="about-map-section">
        <h2>Nuestra ubicación</h2>
        <p>Nuestra unica tienda esta situada en Las Palmas de Gran Canaria.</p>
        <div className="about-map-wrapper">
          <Map />
        </div>
      </section>
    </main>
  );
}

export default About;
