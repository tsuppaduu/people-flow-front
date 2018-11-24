import React, { Component } from 'react';
import Map from './Map';
import scannerService from './services/scannerService';

class App extends Component {
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
      <div className="app-container">
        <Map data={this.state.data}/>
      </div>
      
    );
  }
}

export default App;
