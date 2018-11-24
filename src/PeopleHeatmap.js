import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Polygon from './Polygon'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import scannerService from './services/scannerService';

class PeopleHeatmap extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }
  async componentDidMount() {
    scannerService.getScanners().then(newData => this.setState({ data: newData})).catch(e => {
    console.log(e);
})
    this.interval = setInterval(() => scannerService.getScanners().then(newData => this.setState({ data: newData})).catch(e => {
    console.log(e);
}) , 500);
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <HeatmapLayer
        points={this.state.data}
        longitudeExtractor={m => m.lng}
        latitudeExtractor={m => m.lat}
        intensityExtractor={m => parseFloat(m.devices)}
        gradient={{0.0: 'white', 0.2: 'green', 0.5: 'orange', 0.8: 'red' }}
        blur={1}
        radius={10}
        minOpacity={0.01}
        max={250}
      />
    );
  }
}

export default PeopleHeatmap;