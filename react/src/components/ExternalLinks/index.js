import React from 'react';
import './externallinks.sass';
import LogoPenseOBetes from 'src/assets/images/logo-pense-o-betes.png';
// import {logo1} from 'src/assets/images/logoP.png';
// import {logo2} from 'src/assets/images/logoSea.png';
// import {logoPeta} from 'src/assets/images/logoPeta.png';
// import {logo5} from 'src/assets/images/logoWwf.png';


const ExternalLinks = () => (
  <div className="externallinks-page">
    
  <div className="container-fluid">
  <div className="col text-center mx-auto">
  
  <div className="jumbotron">
  <div className="liens">
    
  <p className="text-center font-weight-bold mt-4 h4">
    Nous vous proposons quelques liens qui vous conduirons vers des sites auxquels nous faisons entièrement confiance :<br/>
    </p>
      
    <img src={LogoPenseOBetes} alt="logo Pense O Betes"/>

    <p className="text-center">Ce site regroupe toutes les informations nécéssaires pour les propriétaires d'animaux. Vous n'oublierez plus les vaccins ou les rappels.<br/> Le site est un condensé de conseils pour le bien être de vos petites bêtes.</p>
    

    <p className="text-center font-weight-bold mt-4 mb-3 h5">Les autres sites :</p>
    <div className="mb-3"><a className="liens-externes" href="https://www.seashepherd.fr">Sea Shepherd</a></div>
    <div className="mb-3"><a className="liens-externes" href="https://www.la-spa.fr/"> La SPA</a></div>
    <div className="mb-3"><a className="liens-externes" href="https://www.petafrance.com/">Peta</a></div>
    <div className="mb-3"><a className="liens-externes" href="https://www.wwf.fr/">WWF</a></div>


      <span className="fa fa-paw fa-3x"></span>

  
</div>
   


</div>






  </div>

  </div>


  </div>

  
)

export default ExternalLinks;
