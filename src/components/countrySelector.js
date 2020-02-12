import React, { Component } from 'react';

class CountrySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                {
                    name: 'United Kingdom',
                    id: 'gb',
                },
                {
                    name: 'United States',
                    id: 'us',
                },
                {
                    name: 'France',
                    id: 'fr',
                },
                {
                    name: 'Australia',
                    id: 'au',
                },
                {
                    name: 'India',
                    id: 'in',
                }
            ]
        };
    }

    getCountryCode = (e) => {
        const { getSelectedCountry } = this.props;
        getSelectedCountry(e.target.id);
    }

    render() {
        const { countries } = this.state;
        return ( 
            <div>
                <h1>Select A Country</h1>
                <div className="c-country-selector">
                {countries.map(country => (
                    <button key={country.id} id={country.id} onClick={this.getCountryCode}>
                        {country.name}
                    </button>
                ))}
                </div>
            </div>
        )
    }
}

export default CountrySelector;