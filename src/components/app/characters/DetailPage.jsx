import React, { useEffect, useState } from 'react';
import { getCharacter } from '../../../services/rickyAndMortyApi';

const DetailPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(async () => {
    const character = await getCharacter(match.params.id);
    setCharacter(character);
    setLoading(false);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      {character &&
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>{character.species}</p>
          <p>{character.status}</p>
        </div>}
    </>
  );
};

export default DetailPage;
