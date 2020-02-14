import React, { Component } from 'react';
import Slider from "react-slick";

class CountrySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                {
                    name: 'UK',
                    id: 'gb',
                },
                {
                    name: 'US',
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
        const settings = {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,  
            variableWidth: true,
            responsive: [
                {
                  breakpoint: 576
                },
                {
                  breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
                  settings: {
                    slidesToShow: 5,
                    dots: false,
                    arrows: false
                  }
                }
            ],
          };
        return (             
            <div className="c-country-selector">
                <Slider {...settings}>
                {countries.map(country => (
                    <div className="c-country-selector__item" key={country.id} id={country.id} onClick={this.getCountryCode}>
                        <p>{country.name}</p>
                    </div>
                ))}
                </Slider>
            </div>    
        )
    }
}

export default CountrySelector;