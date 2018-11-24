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
    const { zoom } = this.props
    
    const radius = zoom === 17 ? 20 : zoom === 18 ? 30 : 44
    const blur = zoom === 17 ? 20 : zoom === 18 ? 30 : 44 

    
    console.log(radius)
    return (
      <HeatmapLayer
        points={this.state.data}
        longitudeExtractor={m => m.lng}
        latitudeExtractor={m => m.lat}
        intensityExtractor={m => parseFloat(m.devices)}
        gradient={{ 0.4: 'green', 0.8: 'orange', 1.0: 'red' }}
        radius={radius}
        blur={blur}
        minOpacity={0.01}
        max={200}
        maxZoom={17}
      />
    );
  }
}

export default PeopleHeatmap;