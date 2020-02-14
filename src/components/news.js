import React, { Component } from 'react';
import axios from 'axios';
import Article from './article';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.returnNewsData();
  }

  componentDidUpdate(prevProps) {
    let { selectedCountryCode } = this.props;
    if (selectedCountryCode !== prevProps.selectedCountryCode) {
        this.returnNewsData();
    }
  }

  async returnNewsData() {
    let { selectedCountryCode } = this.props;
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${selectedCountryCode}&pageSize=5&apiKey=2d5e0a0ed47a4343a0a5125e191bc8f4`);
      const data = response.data.articles;
      this.setState({ data });
    } catch (e) {
        console.log(`Axios request failed: ${e}`);
    }
  }

  render() {
      const { data } = this.state;
      const { selectedCountryName } = this.props;
      return (
          <div className="c-news">
            <h1 className="c-news__title">{!this.props.selectedCountryCode ? '' : `${selectedCountryName} latest news`}</h1>
            {data.length > 0 ? 
                data.map((article, index) => <Article key={index} articleData={article} />)
                :
                <p className="c-news__noCountry">Select a country for the latest headlines</p>
            }
          </div>
      )
  }
}

export default News;