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
          <div className="bonjour col-md-4">
            <i className="fa fa-user"></i><p className="ml-2">Bonjour {userData.userFirstName}</p>
          </div>
          <div className="logo_header col-md-4">
            <NavLink to="/" exact className="navbar-brand mx-auto"><img src={Logo} alt="logo miaou" className="logo-miaou d-inline-block align-top"/>
            </NavLink>
            <p className="subtitle_header font-weight-bold h5">Le site des animaux perdus</p>
          </div>
          <div className="col-md-4">
            <form className="form-inline">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item mt-3 mx-3">
                      <NavLink to="/" exact className="btn btn-primary btn-lg col">Accueil
                      </NavLink>
                      </li> 
                      <li className="nav-item mt-3 mx-3">
                      <NavLink to="/profil" exact className="btn btn-primary btn-lg col">Profil
                      </NavLink>
                      </li>
                      <li className="nav-item active mt-3 mx-3">
                        <a href="/deconnexion" className="btn btn-primary btn-lg col">Se déconnecter</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </form>
          </div>
      </div>
        
  </div>      
     
    )
  } else {
    return(
      <div className="header-disconnected">
      <div className="row">
          <div className="bonjour col-md-4">
            <i className="fa fa-user-times"></i><p className="ml-2">non connecté</p>
          </div>
          <div className="logo_header col-md-4">
            <NavLink to="/" exact className="navbar-brand mx-auto"><img src={Logo} alt="logo miaou" className="logo-miaou d-inline-block align-top"/>
            </NavLink>
            <p className="subtitle_header font-weight-bold h5">Le site des animaux perdus</p>
          </div>
          <div className="col-md-4">
            <form className="form-inline">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item mt-3  mx-3 ">
                      <NavLink to="/" exact className="btn btn-primary btn-lg col"> Accueil
                      </NavLink>
                      </li> 
                      <li className="nav-item mt-3 mx-3">
                      <a href="/connexion" className="btn btn-primary  btn-lg col" >Se connecter</a>
                      </li>
                      <li className="nav-item active mt-3 mx-3 ">
                        <a href="/inscription" className="btn btn-primary btn-lg col"> S'inscrire </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </form>
          </div>
      </div>
        
      </div>  

    )
  }

}

export default Header;


