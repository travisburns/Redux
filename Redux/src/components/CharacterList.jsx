import React from 'react';
import { useSelector } from 'react-redux';

const CharacterList = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div>
      <h4>Characters</h4>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <div>{character.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;