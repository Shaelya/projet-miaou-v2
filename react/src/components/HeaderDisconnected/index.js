import React from 'react';


const HeaderDisconnected = () => (
  <div className="header-disconnected">
    <nav className="navbar navbar-dark">
        <i className="fa fa-user-times"></i><p className="ml-2 text-white">non connecté</p>
        <a className="navbar-brand mx-auto" href="#">
          <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
          <h1>MIA'Où</h1>
        </a>
        <form className="form-inline">
          <button className="btn btn-info mr-2" type="button">Se connecter</button>
          <button className="btn btn-info" type="button">S'inscrire</button>
        </form>
      </nav>
      <p className="subtitle text-white">Le site des animaux perdus</p>
  </div>
 

)

export default HeaderDisconnected;

