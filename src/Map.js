import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer';

export const addressPoints = [
[61.492635, 23.763434, "571"],
[61.492625, 23.763434, "486"],
[61.49270,23.76039, "100010"],
]

const CustomMap = () => {
  const position = [61.492625, 23.763434]
  return (
    <Map center={position} zoom={17}>
      <TileLayer
        url="http://{s}.tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <HeatmapLayer
            points={addressPoints}
            longitudeExtractor={m => m[1]}
            latitudeExtractor={m => m[0]}
            intensityExtractor={m => parseFloat(m[2])} />
      <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )
}

export default CustomMap