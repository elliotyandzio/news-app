import React, { Component } from 'react';
import CountrySelector from './components/countrySelector';
import News from './components/news';

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
    let { selectedCountry } = this.state;
    return (
      <div className="App">
        <CountrySelector getSelectedCountry={this.getSelectedCountry}/>
        <News selectedCountry={selectedCountry}/>
      </div>
    );
  }
}

export default App;
