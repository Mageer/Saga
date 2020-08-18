import React from 'react';
import RightElement from '../elements/LeftElement';
import shirazImg from '../../media/shiraz.png';

function Shiraz() {
  const name = 'Shiraz 2019';
  const description = `Frisk of fyldig.
  Røde og mørke bær, bløte tanniner og hint av vanilje.
  
  VMP nr: 12116901`;

  return(
    <RightElement name={name} description={description} image={shirazImg} />
  );
}

export default Shiraz;
