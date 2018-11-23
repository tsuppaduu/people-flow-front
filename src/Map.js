import React from 'react';
import { Map, Marker, Popup, TileLayer, Polygon } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

export const addressPoints = [
  [61.492635, 23.763434, '571'],
  [61.492625, 23.763434, '486'],
  [61.4927, 23.76039, '100010'],
];

const CustomMap = () => {
  const position = [61.492625, 23.763434];
  const mainStagePos = [
    [61.49304, 23.7643],
    [61.49312, 23.765325],
    [61.49252, 23.76555],
    [61.49244, 23.76459],
  ];
  const foodOne = [
    [61.49302, 23.762846],
    [61.493035, 23.762972],
    [61.49299, 23.762993],
    [61.492961, 23.762859],
  ];
  const stalls = [
    [61.493060, 23.763382],
    [61.493120, 23.764154],
    [61.493000, 23.764200],
    [61.492940, 23.763430],
  ];
  return (
    <Map center={position} zoom={17}>
      <TileLayer
        url="http://{s}.tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatmapLayer
        points={addressPoints}
        longitudeExtractor={m => m[1]}
        latitudeExtractor={m => m[0]}
        intensityExtractor={m => parseFloat(m[2])}
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>

      <Polygon positions={mainStagePos}>
        <Popup>
          Main stage.
          <br />
          1000 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={foodOne}>
        <Popup>
          Food place one.
          <br />
          40 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={stalls}>
        <Popup>
          WC.
          <br />
          4000 hlö.
        </Popup>
      </Polygon>
    </Map>
  );
};

export default CustomMap;
