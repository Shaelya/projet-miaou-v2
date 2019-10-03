// import React, { Component } from 'react'
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

// import './map.sass'



// const MiaouMap = ({location}) => {
//   const position = [location.lat, location.lng]
//     return (
//       <Map center={position} zoom={location.zoom}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={position}>
//           <Popup>
//             Vous êtes ici
//           </Popup>
//         </Marker>
//       </Map>
//     )
//   }


// export default MiaouMap;

import React, { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Map, TileLayer } from "react-leaflet";
import "./map.sass";


class MiaouMap extends Component {
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

  render() {
    const center = [46.227638, 2.213749];
    return (
      <Map
        center={center}
        zoom="6"
        ref={m => {
          this.leafletMap = m;
        }}
      >
        <TileLayer
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
        <div className="pointer" />
      </Map>
    );
  }
}

export default MiaouMap;


