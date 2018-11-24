import React from 'react';
import { Map, Marker, Popup, TileLayer, Polygon } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

export const addressPoints = [
  [61.492635, 23.763434, '10'],
  [61.492635, 23.763433, '10'],
  [61.492635, 23.763300, '10'],
  [61.492625, 23.763434, '30'],
  [61.4927, 23.76039, '100010'],
];

const CustomMap = () => {
  const middlePosition = [61.492600, 23.762500];
  const mapBounds = [[61.494761, 23.758024], [61.491382, 23.767546]]
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

  const toilet1 = [
    [61.4931271, 23.7600485],
    [61.4931674, 23.7602655],
    [61.4930855, 23.7603299],
    [61.4930394, 23.7601207],
  ];

  const firstAid = [
    [61.4932606, 23.7608396],
    [61.4932350, 23.7608530],
    [61.4932625, 23.7611145],
    [61.4932858, 23.7610969],
  ];

  const entrance1 = [
    [61.4942756, 23.7602012],
    [61.4942884, 23.7603125],
    [61.4942353, 23.7603447],
    [61.4942058, 23.7602374],
  ];

  const yleStudio = [
    [61.4918819, 23.7595481],
    [61.4920125, 23.7596125],
    [61.4919664, 23.7601006],
    [61.4918461, 23.7600631],
  ];

  const toilet2 = [
    [61.4919245, 23.7621469],
    [61.4918310, 23.7622125],
    [61.4918643, 23.7626497],
    [61.4919564, 23.7625772],
  ];

  const vipArea = [
    [61.4927066, 23.7615434],
    [61.4927181, 23.7616534],
    [61.4927988, 23.7616185],
    [61.4928180, 23.7618036],
    [61.4920790, 23.7620949],
    [61.4920585, 23.7619205],
    [61.4922403, 23.7616925],
  ];

  const TentStage = [
    [61.4926808, 23.7595169],
    [61.4925707, 23.7602303],
    [61.4919408, 23.7596617],
    [61.4919997, 23.7590823],
  ];


  return (
    <Map center={middlePosition} zoom={17} minNativeZoom={18} maxBounds = { mapBounds } minZoom = {17} maxZoom = {19}> 
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
      <Marker position={middlePosition}>
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

      <Polygon positions={toilet1}>
        <Popup>
          Toilet.
          <br />
          150 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={firstAid}>
        <Popup>
          First Aid.
          <br />
          50 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={entrance1}>
        <Popup>
          Entrance 1.
          <br />
          400 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={yleStudio}>
        <Popup>
          Yle Studio.
          <br />
          60 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={toilet2}>
        <Popup>
          Toilet 2.
          <br />
          40 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={vipArea}>
        <Popup>
          Vip Area.
          <br />
          300 hlö.
        </Popup>
      </Polygon>

      <Polygon positions={TentStage}>
        <Popup>
          Tent Stage.
          <br />
          600 hlö.
        </Popup>
      </Polygon>


    </Map>
  );
};

export default CustomMap;
