import React, { Component } from 'react';
import CountrySelector from './components/countrySelector';
import News from './components/news';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountryCode: '',
      selectedCountryName: ''
    }
  }

  getSelectedCountry = (selectedCountryCode, selectedCountryName) => {
    this.setState({selectedCountryCode, selectedCountryName})
  }

  render() {
    let { selectedCountryCode, selectedCountryName } = this.state;
    return (
      <div className="App">
        <CountrySelector getSelectedCountry={this.getSelectedCountry}/>
        <News selectedCountryCode={selectedCountryCode} selectedCountryName={selectedCountryName}/>
      </div>
    );
  }
}

export default App;
