import React from 'react';
import RightElement from '../elements/RightElement';
import cabernetImg from '../../media/cabernet.png';

function Cabernet() {
  const name = 'Cabernet Sauvignon 2018';
  const description = `Rik aroma og preg av mørke bær, bløte tanniner.
  Hint av mynte of krydder.
  
  VMP nr: 12116601`;

  return(
    <RightElement name={name} description={description} image={cabernetImg} />
  );
}

export default Cabernet;