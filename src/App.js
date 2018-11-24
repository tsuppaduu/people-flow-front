import React, { Component } from 'react';
import Map from './Map';
import scannerService from './services/scannerService';

class App extends Component {
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
      <div className="app-container">
        <Map data={this.state.data}/>
      </div>
    );
  }
}

export default App;
