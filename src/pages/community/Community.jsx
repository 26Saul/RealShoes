import React, { useState } from "react";

function Community() {
  const [members, setMembers] = useState([
    { id: 1, name: "Juan Pérez", role: "Fundador" },        
    { id: 2, name: "María Gómez", role: "Diseñadora" },
    { id: 3, name: "Carlos Rodríguez", role: "Desarrollador" },
  ]);

    return (
        <div className="community">
            <h1>Nuestra Comunidad</h1>
            <p>En RealShoes, creemos que la comunidad es el corazón de nuestra marca. Nos enorgullece contar con un grupo diverso y apasionado de miembros que comparten nuestro amor por el calzado de calidad y el diseño innovador.</p>
            <h2>Conoce a Nuestro Equipo</h2>
            <ul>
                {members.map(member => (
                    <li key={member.id}>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </li>
                ))}
            </ul>   
            <h2>Únete a Nuestra Comunidad</h2>
            <p>Si quieres formar parte de nuestra comunidad, síguenos en nuestras redes sociales y suscríbete a nuestro boletín para recibir las últimas noticias, lanzamientos y eventos exclusivos.</p>
        </div>
    );
}

export default Terms;