import React from 'react';
import photo1 from 'src/assets/images/gege.png';
import photo2 from 'src/assets/images/Marie.png';
import photo3 from 'src/assets/images/Helene.png';
import photo4 from 'src/assets/images/vaness.png';

const Team = () => (
  <div className="team-page">


  <div className="container">
    <h1 className="text-center text-muted">La team Mia'Où</h1>
      <div className="row">
        <div className="col-xs-6 col-sm-3 hover-zoomin">
          <a href="#" title="">
            <img src={photo2} alt="Marie"/>
          </a>
          <h4 className="text-center">Marie GitMaster</h4>
        </div>
        <div className="col-xs-6 col-sm-3 hover-fade">
          <a href="#" title="">
            <img src={photo3} alt="Helene"/>
          </a>
          <h4 className="text-center">Helene Product Owner</h4>
        </div>
        <div class="col-xs-6 col-sm-3 hover-blur">
          <a href="#" title="">
            <img src={photo1} alt="Geraldine"/>
            <h2><span class="text-white">Geraldine Lead Back end</span></h2>
          </a>
          <h4 class="text-center">Geraldine Lead Back end</h4>
        </div>
        <div class="col-xs-6 col-sm-3 hover-mask">
          <a href="#" title="">
            <img src={photo4} alt="Vanessa"/>
            <h2><span class="glyphicon glyphicon-search"></span></h2>
          </a>
          <h4 class="text-center">Vanessa Lead Front end</h4>
        </div>
      </div>
       
                
        
      </div>
    </div>
















 


  
)

export default Team;
