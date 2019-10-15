import React from 'react';
import photo1 from 'src/assets/images/gege.png';
import photo2 from 'src/assets/images/Marie.png';
import photo3 from 'src/assets/images/Helene.png';
import photo4 from 'src/assets/images/vaness.png';

const Team = () => (
  <div className="team-page">


  <div className="container">
    <h1 className="text-center text-muted mb-5">La Team</h1>
      <div className="row">
        <div className="col-xs-6 col-sm-3 hover-zoomin">
          <a href="#" title="">
            <img src={photo2} className="img-thumbnail img-responsive" alt="Marie"/>
          </a>
          <h4 className="text-center font-weight-bold">Marie - Scrum Master/Git Master</h4>
        </div>
        <div className="col-xs-6 col-sm-3 hover-zoomin">
          <a href="#" title="">
            <img src={photo3} className="img-thumbnail img-responsive" alt="Helene"/>
          </a>
          <h4 className="text-center font-weight-bold">Helene - Product Owner</h4>
        </div>
        <div className="col-xs-6 col-sm-3 hover-zoomin">
          <a href="#" title="">
            <img src={photo1} className="img-thumbnail img-responsive" alt="Geraldine"/>
          </a>
          <h4 className="text-center font-weight-bold">Geraldine - Lead Dev Back end</h4>
        </div>
        <div className="col-xs-6 col-sm-3 hover-zoomin">
          <a href="#" title="">
            <img src={photo4} className="img-thumbnail img-responsive" alt="Vanessa"/>
          </a>
          <h4 className="text-center font-weight-bold">Vanessa - Lead Dev Front end</h4>
        </div>
      </div>
       
                
        
      </div>
    </div>
















 


  
)

export default Team;
