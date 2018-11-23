import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const CustomMap = () => {
  const position = [61.492625, 23.763434]
  return (
    <Map center={position} zoom={17}>
      <TileLayer
        url="http://{s}.tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )
}

export default CustomMap