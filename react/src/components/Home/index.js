import React from 'react';
import Map from 'src/components/Map';
import AlertButton from 'src/components/AlertButton';

class Home extends React.Component {

  state = {
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

  render () {

    return(
      <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Map alertButton={this.props.alertButton} data={(this.state.data) ? this.state.data : this.props.data } handleClickMap={this.props.handleClick} getData={this.props.getData} />
            </div>
            <div className="col text-center">

            <AlertButton alertButton={this.props.alertButton} handleClick={this.props.handleClick} />
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
