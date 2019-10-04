import React from 'react';
import HeaderDisconnected from 'src/components/HeaderDisconnected';
import Footer from 'src/components/Footer';
import Map from 'src/components/Map';
import AlertButton from 'src/components/AlertButton';

const Homepage = ({alertButton, handleClick}) => (
  <div className="homepage">
    <HeaderDisconnected />
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Map alertButton={alertButton} handleClickMap={handleClick} />
        </div>
        <div className="col text-center">

        <AlertButton alertButton={alertButton} handleClick={handleClick} />
        <div>
          <div className="btn-group-vertical">
            <button type="button" className="btn btn-danger btn-lg mb-4">Animaux Perdus</button>
            <button type="button" className="btn btn-warning btn-lg mb-4">Animaux Vus</button>
            <button type="button" className="btn btn-info btn-lg">Animaux Trouvés</button>
            
          </div>
        </div>
      </div>
        
      </div>
    </div>
    <Footer />
 </div>

  
)

export default Homepage;
