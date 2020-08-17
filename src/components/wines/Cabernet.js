import React from 'react';
import LeftElement from '../elements/LeftElement';
import cabernetImg from '../../media/cabernet.png';

function Cabernet() {
  const name = 'Cabernet';
  const description = `The 2018 Inara Cabernet sauvignon has it all – blackcurrant, a hint of mint, blackberry compôte and a touch of spice from the oak.
  
  The tannins are fine and firm, providing generous support to the concentrated fruit.  
  While designed to be consumed early, the wine will continue to improve over the mid term.`;

  return(
    <LeftElement name={name} description={description} image={cabernetImg} />
  );
}

export default Cabernet;