import React from 'react';
import LeftElement from '../elements/LeftElement';
import waywardChildIlionImg from '../../media/wayward_child_ilion.png';

function WaywardChildIloin() {
  const name = 'Wayward Child Ilion 2019';
  const description = `En spennende og lagringsdyktig hvitvin laget av 80% Sauvignon Blanc og 20% Semillon.

  Syrlig og tørr, med streif av tropiske frukter.
  
  Ufiltrert.
  
  VMP nr: 12116801`;
  
  return(
    <LeftElement name={name} description={description} image={waywardChildIlionImg} />
  );
};

export default WaywardChildIloin;
