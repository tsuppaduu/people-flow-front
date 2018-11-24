import React from 'react';
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
    const data = await scannerService.getScanners()
    console.log("uusi", data)
    this.setState({data:data})
    this.interval = setInterval(() => scannerService.getScanners().then(newData => this.setState({ data: newData})) , 5000);
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
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
    );
  }
}