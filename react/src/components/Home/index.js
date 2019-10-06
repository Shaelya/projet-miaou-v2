import React from 'react';
import Map from 'src/components/Map';
import AlertButton from 'src/components/AlertButton';

const Home = ({alertButton, data, handleClick, getData}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <Map alertButton={alertButton} data={data} handleClickMap={handleClick} getData={getData} />
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

  
)

export default Home;
