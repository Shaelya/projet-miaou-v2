import React from 'react';
import Map from 'src/components/Map';
import AlertButton from 'src/components/AlertButton';
import Joyride from 'react-joyride';
import './home.sass';

class Home extends React.Component {

  state = {
    run: false,
    steps: [
      {
        target: 'body',
        content: 'Prêt.e pour un petit tour ?',
        locale: { 
          next: <span>C'est parti !</span>
        },
        placement: 'center'
      },
      {
        target: '.button-alert',
        content: 'Cliquez-ici pour poster une alerte',
      },
      {
        target: '.geocoder-control-input',
        content: 'Vous pouvez chercher votre adresse ici'
      },
      {
        target: '.leaflet-container',
        content: 'Cliquez ensuite sur la map pour placer une épingle',
      },
      {
        target: '.btn-group-vertical',
        content: 'Vous pouvez égalemment filtrer les épingles sur la map',
      }
    ]
  }
  handleFilter = () => {

    let filter = event.target.id;
    let filteredData = this.props.data;

    switch (filter) {
      case 'lost': {
        filteredData = this.props.data.filter((alerte) => alerte.status == 'perdu');
        break;
      }
      case 'seen': {
        filteredData = this.props.data.filter((alerte) => alerte.status == 'vu');
        break;
      }
      case 'found': {
        filteredData = this.props.data.filter((alerte) => alerte.status == 'trouvé');
        break;
      }
      default: {
        break;
      }
    }
    
    this.setState({data: filteredData});
  }

  handleGuidedTour = () => {
    this.setState({run: true});
  }

  render () {

    return(
      <div className="container-fluid">
        <Joyride run={this.state.run} steps={this.state.steps} continuous={true} showProgress={true} showSkipButton={true} styles={{options: {primaryColor: '#ff6b6b' }}} />
          <div className="text-center"><button onClick={this.handleGuidedTour} className="btn btn-light btn-lg mb-4">Montre-moi comment ça marche !</button></div>
          <div className="row">
            <div className="col-8">
              <Map alertButton={this.props.alertButton} data={(this.state.data) ? this.state.data : this.props.data } handleClickMap={this.props.handleClick} getData={this.props.getData} userConnected={this.props.userConnected}  />
            </div>
            <div className="col-4 text-center">

            <AlertButton alertButton={this.props.alertButton} handleClick={this.props.handleClick}  userConnected={this.props.userConnected} />
            <div>
              <div className="btn-group-vertical">
                <button onClick={this.handleFilter} type="button" id="all" className="btn btn-light btn-lg mb-4">Tous</button>
                <button onClick={this.handleFilter} type="button" id="lost" className="btn btn-danger btn-lg mb-4">Animaux Perdus</button>
                <button onClick={this.handleFilter} type="button" id="seen" className="btn btn-warning btn-lg mb-4">Animaux Vus</button>
                <button onClick={this.handleFilter} type="button" id="found" className="btn btn-info btn-lg">Animaux Trouvés</button>
                
              </div>
            </div>
          </div>
            
          </div>
        </div>
    )
  }

}

export default Home;
