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
    [61.49306, 23.763382],
    [61.49312, 23.764154],
    [61.493, 23.7642],
    [61.49294, 23.76343],
  ];

  const stadionExitOne = [
    [61.49294, 23.76194],
    [61.4932, 23.76235],
    [61.493, 23.76271],
    [61.49279, 23.76245],
  ];

  const stadionExitTwo = [
    [61.49232, 23.76258],
    [61.4921, 23.76219],
    [61.49191, 23.76305],
    [61.49221, 23.76314],
  ];

  const bridge = [
    [61.49423, 23.76031],
    [61.49421, 23.76024],
    [61.49379, 23.7604],
    [61.49337, 23.76062],
    [61.49338, 23.76071],
    [61.49381, 23.76049],
    [61.494, 23.7604],
  ];
  return (
    <Map center={position} zoom={18} minNativeZoom={18}> 
      <TileLayer
        url="https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}"
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

      <Polygon positions={stadionExitOne}>
        <Popup>
          Stadion exit one.
          <br />
          4000 hlö.
        </Popup>
      </Polygon>
      <Polygon positions={stadionExitTwo}>
        <Popup>
          Stadion exit two.
          <br />
          4000 hlö.
        </Popup>
      </Polygon>
      <Polygon positions={stadionExitOne}>
        <Popup>
          Stadion exit one.
          <br />
          4000 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={bridge}>
        <Popup>
          Bridge.
          <br />
          4000 hlö.
        </Popup>
      </Polygon>
    </Map>
  );
};

export default CustomMap;
