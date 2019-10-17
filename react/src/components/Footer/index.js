import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.sass';
import './footer.css';

const Footer = () => (

  <nav className="px-5 navbar mt-4 text-center navbar-dark rounded bg-light border-right border-bottom">
    <NavLink to="/comment-ca-marche" exact className="ml-5 h4 text-danger">Comment ça marche ?</NavLink>
    <NavLink to="/equipe" exact className="h4 text-dark">L'équipe</NavLink>
    <NavLink to="/mentions-legales" exact className="h4 text-dark">Mentions Légales</NavLink>
    <NavLink to="/liens-externes" exact className="h4 mr-5 text-dark">Liens Externes</NavLink>
  </nav>

  
)

export default Footer;
