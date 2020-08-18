import React from 'react';
import RightElement from '../elements/RightElement';
import blancDeBlancImg from '../../media/blanc_de_blanc.png';

function BlancDeBlanc() {
  const name = 'Inara Blanc de Blanc';
  const description = `Laget av 100% Chardonnay druer.
  Frisk of syrlig, med preg av grønne epler mildt kremet.
  
  VMP nr: 12116701`;

  return(
    <RightElement name={name} description={description} image={blancDeBlancImg} />
  );
}

export default BlancDeBlanc;