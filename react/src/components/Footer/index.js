import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <nav className="navbar fixed-bottom navbar-dark bg-dark mt-4">
  <NavLink to="/comment-ca-marche" exact className="text-danger">Comment ça marche ?</NavLink>
  <NavLink to="/equipe" exact className="text-white">L'équipe</NavLink>
  <NavLink to="/mentions-legales" exact className="text-white">Mentions Légales</NavLink>
  <NavLink to="/liens-externes" exact className="text-white">Liens Externes</NavLink>
  </nav>
)

export default Footer;
