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

    //function that runs when the users clicks a country. It grabs the name and id of the clicked element.
    //It then calls the callback function passed through props from the app component and adds the data as the
    //parameters of the function.
    getSelectedCountryDetails = (e) => {
        const { getSelectedCountry } = this.props;
        const selectedCountryName = e.target.getAttribute('name')
        getSelectedCountry(e.target.id, selectedCountryName);
    }

    render() {
        const { countries } = this.state;
        const settings = { //Carousel settings
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
                    <div className="c-country-selector__item" key={country.id} id={country.id} name={country.name} onClick={this.getSelectedCountryDetails}>
                        <p>{country.name}</p>
                    </div>
                ))}
                </Slider>
            </div>    
        )
    }
}

export default CountrySelector;