import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const StyleCards = styled.div`
display: 'flex'; 
justify-content: 'space-around';
border-radius:'10px';
`

export default function Cards(props) {
   const { characters }  = props;
   console.log(characters)
   return (
      <StyleCards>
         {characters.map(character => (
            <Card 
            id= {character.id}
            key = {character.name}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
            onClose={() => props.onClose(character.id)}
            />
         ))}
      </StyleCards>
   );
}
