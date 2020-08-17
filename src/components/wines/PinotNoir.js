import React from 'react';
import RightElement from '../elements/RightElement';
import pinotNoirImg from '../../media/pinot_noir.png';

function PinotNoir() {
  const name = 'Pinot Noir';
  const description = `Displaying an intense ruby colour, the 2018 Inara Pinot Noir is a study in red fruits.
    Full of dark cherry, raspberry and macerated strawberry flavours, the palate of this wine has silky tannins and a touch of clove spice from the oak ageing.

    A wine made to be enjoyed with family and friends.`;
  
  return(
    <RightElement name={name} description={description} image={pinotNoirImg} />
  );
};

export default PinotNoir;
