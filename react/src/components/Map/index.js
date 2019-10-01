import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import './map.sass'



const MiaouMap = ({location}) => {
  const position = [location.lat, location.lng]
    return (
      <Map center={position} zoom={location.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            Vous êtes ici
          </Popup>
        </Marker>
      </Map>
    )
  }


export default MiaouMap;

