import React, { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Map, TileLayer, Marker } from "react-leaflet";
import { connect } from 'react-redux';
import "./map.sass";


class MiaouMap extends Component {
  state = {
    markers: []
  }
  componentDidMount() {
    const map = this.leafletMap.leafletElement;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function(data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }

  addMarker = (e) => {
    if(this.props.alertButton) {
      const markers = this.state.markers
      markers.push(e.latlng)
      this.setState({
        markers: markers
      })
    }

  }

  render() {
    const center = [46.227638, 2.213749];
    return (
      <Map
        center={center}
        onClick={this.addMarker}
        zoom="6"
        ref={m => {
          this.leafletMap = m;
        }}
      >
        <TileLayer
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}></Marker>
        )}
      </Map>
    );
  }
}



// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state) => {
    return {
      alertButton: state.alertButton
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {};
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const MiaouMapContainer = connectionStrategies(MiaouMap);

// Étape 3 : on exporte le composant connecté qui a été généré
export default MiaouMapContainer;


