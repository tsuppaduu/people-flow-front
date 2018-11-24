import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Polygon from './Polygon'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import polygonCoords from './polygonCoords';

export const addressPoints = [
  [61.492635, 23.763434, '10'],
  [61.492635, 23.763433, '10'],
  [61.492635, 23.7633, '10'],
  [61.492625, 23.763434, '30'],
  [61.4927, 23.76039, '100010'],
];

const CustomMap = (props) => {
  const middlePosition = [61.492600, 23.762500];
  const mapBounds = [[61.494761, 23.758024], [61.491382, 23.767546]]

  const handleClick = (e) => {
    console.log(e.latlng)
  }
<<<<<<< HEAD

=======
  
  const exclusiveArea = [
    [61.4924277, 23.7644686],
    [61.4925096, 23.7652303],
    [61.4924046, 23.7652679],
    [61.4923355, 23.7644847],
  ];

  const sonera = [
    [61.4925072, 23.7605845],
    [61.4925104, 23.7607991],
    [61.4924477, 23.7608822],
    [61.4924349, 23.7604906],
  ];
  console.log("taalla", props.data)
>>>>>>> 7cd5278bdf6549f182cb558cb92a5ed33b9291f0

  return (
    <Map
      center={middlePosition}
      zoom={17}
      minNativeZoom={18}
      maxBounds={mapBounds}
      minZoom={17}
      maxZoom={19}
      onClick={handleClick}
    >
      <TileLayer
        url="https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatmapLayer
        points={props.data}
        longitudeExtractor={m => m.lng}
        latitudeExtractor={m => m.lat}
        intensityExtractor={m => parseFloat(m.devices)}
        gradient={{ 0.4: 'green', 0.8: 'orange', 1.0: 'red' }}
        blur={1}
        radius={10}
        minOpacity={0.01}
      />
      <Marker position={middlePosition}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>

      {polygonCoords.polyPositions.map(pos => (
        <Polygon key = {pos.desc} positions={pos.coords}>
          <Popup>{pos.desc}</Popup>
        </Polygon>
      ))}
    </Map>
  );
};

export default CustomMap;
