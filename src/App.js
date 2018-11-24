import React, { Component } from 'react';
import Map from './Map';
import scannerService from './services/scannerService';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-container">
        <Map/>
      </div>
    );
  }
}

export default App;
