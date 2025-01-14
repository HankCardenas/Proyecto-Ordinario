import React from 'react';
import './Posts.css';

const Posts = () => {
  const games = [
    {
      title: "Grand Theft Auto V",
      year: 2013,
      description: "Un juego de acción y aventura en un mundo abierto con múltiples personajes y una narrativa profunda.",
    },
    {
      title: "Red Dead Redemption 2",
      year: 2018,
      description: "Un épico juego de acción y aventura en el viejo oeste, con gráficos impresionantes y una historia cautivadora.",
    },
    {
      title: "Red Dead Redemption",
      year: 2010,
      description: "Una obra maestra del oeste que sigue las aventuras de John Marston mientras busca redención.",
    },
    {
      title: "Red Dead Revolver",
      year: 2004,
      description: "El primer juego de la saga Red Dead, una mezcla de acción y aventura ambientada en el viejo oeste.",
    },
    {
      title: "L.A. Noire",
      year: 2011,
      description: "Un thriller policíaco que combina investigación, acción y resolución de crímenes.",
    },
    {
      title: "Bully",
      year: 2006,
      description: "Un juego de mundo abierto ambientado en una escuela donde debes enfrentar desafíos sociales y académicos.",
    },
    {
      title: "Max Payne 3",
      year: 2012,
      description: "Un intenso juego de disparos en tercera persona con una narrativa cinematográfica.",
    },
    {
      title: "Midnight Club 3: DUB Edition",
      year: 2005,
      description: "Un emocionante juego de carreras callejeras con personalización avanzada de vehículos.",
    },
    {
      title: "Manhunt",
      year: 2003,
      description: "Un juego de sigilo y supervivencia donde el jugador debe escapar de una serie de situaciones de alto riesgo.",
    },
    {
      title: "The Warriors",
      year: 2005,
      description: "Basado en la película, este juego de acción presenta a una banda de los años 70 luchando por sobrevivir en la ciudad.",
    },
    {
      title: "Grand Theft Auto IV",
      year: 2008,
      description: "La cuarta entrega de la saga GTA, siguiendo a Niko Bellic en su búsqueda del sueño americano.",
    },
    {
      title: "Grand Theft Auto: San Andreas",
      year: 2004,
      description: "Un juego de acción en un vasto mundo abierto, centrado en la vida de Carl 'CJ' Johnson.",
    },
    {
      title: "Grand Theft Auto III",
      year: 2001,
      description: "El juego que definió la franquicia, introduciendo el mundo 3D en la serie.",
    },
    {
      title: "Grand Theft Auto: Vice City",
      year: 2002,
      description: "Un homenaje a los años 80, donde Tommy Vercetti se enfrenta al crimen en una ciudad llena de luces neón.",
    },
  ];

  return (
    <section className="rockstar-posts">
      <h2>Juegos Icónicos de Rockstar Games</h2>
      <div className="games-list">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <h3>{game.title}</h3>
            <p className="year">Año: {game.year}</p>
            <p className="description">{game.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
