import React from 'react';
import RightElement from '../elements/RightElement';
import roseImg from '../../media/rose.png';

function Rose() {
  const name = 'Inara Rosé 2019';
  const description = `Laget av 87% Merlot og 13% Pinot Gris.Frisk og delikat, med preg av røde bær.
  
  Aroma av bringebær, fioler og kirsebær.
  
  VMP nr: 12117001`;

  return(
    <RightElement name={name} description={description} image={roseImg} />
  );
}

export default Rose;