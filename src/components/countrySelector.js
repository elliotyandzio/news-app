import React, { Component } from 'react';

class CountrySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                {
                    name: 'United Kingdom',
                    id: 'UK',
                },
                {
                    name: 'United States',
                    id: 'US',
                },
                {
                    name: 'France',
                    id: 'FR',
                },
                {
                    name: 'Australia',
                    id: 'AU',
                },
                {
                    name: 'India',
                    id: 'IN',
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
                <h1>Country Selector</h1>
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