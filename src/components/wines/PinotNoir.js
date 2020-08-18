import React from 'react';
import LeftElement from '../elements/LeftElement';
import pinotNoirImg from '../../media/pinot_noir.png';

function PinotNoir() {
  const name = 'Pinot Noir 2018';
  const description = `Godt balansert med preg av røde frukter
  Bløte taniner og hint av eik.
  
  VMP nr: 11335001`;
  
  return(
    <LeftElement name={name} description={description} image={pinotNoirImg} />
  );
};

export default PinotNoir;
