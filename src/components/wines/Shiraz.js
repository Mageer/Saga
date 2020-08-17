import React from 'react';
import LeftElement from '../elements/LeftElement';
import shirazImg from '../../media/shiraz.png';

function Shiraz() {
  const name = 'Shiraz';
  const description = `Lovely, easy, medium bodied, fruits.
    Great value for money. And what a fantastic cellar door experience on a beautiful Yarra Valley location.

    Great wine, super hospitality at Helen & Joey!`;

  return(
    <LeftElement name={name} description={description} image={shirazImg} />
  );
}

export default Shiraz;
