import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'src/assets/images/logo-sans-fond.svg';
import './header.sass';
import './header.css';


const Header = ({userData}) => {

  if(userData.userConnected){
    return(
        <div className="header-connected">
                    <div className="row">
                        <div className="col-md-4">
                          <i className="fa fa-user"></i><p className="ml-2">Bonjour {userData.userFirstName}</p>
                        </div>
                        <div className="logo_header col-md-4">
                          <NavLink to="/" exact className="navbar-brand mx-auto"><img src={Logo} alt="logo miaou" className="logo-miaou d-inline-block align-top"/>
                          </NavLink>
                          <p className="subtitle_header font-weight-bold h5">Le site des animaux perdus</p>
                        </div>
                        <div className="col-md-4">
                          <form className="form-inline">
                            <div className="btn-Accueil">
                              <NavLink to="/" exact><button className="btn btn-primary mt-3 mx-3 btn-lg btn-block" type="button">Accueil</button>
                              </NavLink>
                            </div>
                            <div className="btn-Profil">
                              <NavLink to="/profil" exact><button className="btn btn-primary mt-3 mx-3 btn-lg btn-block" type="button">Profil</button>
                              </NavLink>
                              </div>
                              <div className="btn-Accueil">
                              <a href="/deconnexion"><button className="btn btn-primary mt-3 mx-3 btn-lg btn-block" type="button">Se déconnecter</button></a>
                              {/* <NavLink to="/inscription" exact><button className="btn btn-info" type="button">S'inscrire</button></NavLink> */}
                              </div>    
                          </form>
                        </div>
                    </div>
                      
        </div>      
     
    )
  } else {
    return(
      <div className="header-disconnected">
      <nav className="navbar">
          <i className="fa fa-user-times"></i><p className="ml-2">non connecté</p>
          <NavLink to="/" exact className="navbar-brand mx-auto">
            <img src={Logo} alt="logo miaou" className="logo-miaou d-inline-block align-top"/>
          </NavLink>
          <p className="subtitle">Le site des animaux perdus</p>
          <form className="form-inline">
            {/* <NavLink to="/app/login" exact><button className="btn btn-info mr-2" type="button">Se connecter</button></NavLink> */}
            <NavLink to="/" exact className="navbar-brand mx-auto">
            <button className="btn btn-info mr-2" type="button">Accueil</button>
            </NavLink>
            <a href="/connexion"><button className="btn btn-info mr-2" type="button">Se connecter</button></a>
            <a href="/inscription"><button className="btn btn-info mr-2" type="button">S'inscrire</button></a>
            {/* <NavLink to="/inscription" exact><button className="btn btn-info" type="button">S'inscrire</button></NavLink> */}
          </form>
          
        </nav>

    </div>
    )
  }

}

export default Header;


