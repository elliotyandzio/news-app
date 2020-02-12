import React, { Component } from 'react';
import CountrySelector from './components/countrySelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: ''
    }
  }

  getSelectedCountry = (selectedCountry) => {
    this.setState({selectedCountry})
  }

  render() {
    return (
      <div className="App">
        {!this.state.selectedCountry ? 'no country selected' : this.state.selectedCountry}
        <CountrySelector getSelectedCountry={this.getSelectedCountry}/>
      </div>
    );
  }
}

export default App;
