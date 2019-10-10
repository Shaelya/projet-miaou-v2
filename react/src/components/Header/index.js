import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = ({userConnected}) => {

  if(userConnected){
    return(
      <div className="header-connected">
                  <nav className="navbar">
                      <i className="fa fa-user"></i><p className="ml-2">connecté</p>
                      <NavLink to="/" exact className="navbar-brand mx-auto">
                        <h1>MIA'Où</h1>
                      </NavLink>
                      <form className="form-inline">
                        <NavLink to="/profil" exact><button className="btn btn-info mr-2" type="button">Profil</button></NavLink>
                        <a href="/deconnexion"><button className="btn btn-info mr-2" type="button">Se déconnecter</button></a>
                        {/* <NavLink to="/inscription" exact><button className="btn btn-info" type="button">S'inscrire</button></NavLink> */}
                      </form>
                    </nav>
                    <p className="subtitle">Le site des animaux perdus</p>
                </div>
    )
  } else {
    return(
      <div className="header-disconnected">
      <nav className="navbar">
          <i className="fa fa-user-times"></i><p className="ml-2">non connecté</p>
          <NavLink to="/" exact className="navbar-brand mx-auto">
            <h1>MIA'Où</h1>
          </NavLink>
          <form className="form-inline">
            {/* <NavLink to="/app/login" exact><button className="btn btn-info mr-2" type="button">Se connecter</button></NavLink> */}
            <a href="/connexion"><button className="btn btn-info mr-2" type="button">Se connecter</button></a>
            <a href="/inscription"><button className="btn btn-info mr-2" type="button">S'inscrire</button></a>
            {/* <NavLink to="/inscription" exact><button className="btn btn-info" type="button">S'inscrire</button></NavLink> */}
          </form>
        </nav>
        <p className="subtitle">Le site des animaux perdus</p>
    </div>
    )
  }

}

export default Header;



