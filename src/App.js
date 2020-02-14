import React, { Component } from 'react';
import CountrySelector from './components/countrySelector';
import News from './components/news';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountryCode: '', //used to store the country code that is returned when the user clicks a country
      selectedCountryName: '' //used to store the country name that is returned when the user clicks a country
    }
  }

  //callback function that is sent to the country selector component, stores the users country selection
  //and adds it to the state in the component, ready to be passed by props to the new component.
  getSelectedCountry = (selectedCountryCode, selectedCountryName) => {
    this.setState({selectedCountryCode, selectedCountryName})
  }

  render() {
    let { selectedCountryCode, selectedCountryName } = this.state;
    return (
      <div className="App">
        <CountrySelector getSelectedCountry={this.getSelectedCountry}/>
        {!selectedCountryCode ? 'Please select a country' : <News selectedCountryCode={selectedCountryCode} selectedCountryName={selectedCountryName}/>}
      </div>
    );
  }
}

export default App;
