import React, { Component } from 'react';
import Value from './Value'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  increment = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }))
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <Value value={value} />
        <button onClick={() => this.increment()}>PRESS ME</button>
      </div>
    )
  }
}

export default App
