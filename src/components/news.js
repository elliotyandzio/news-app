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

  async componentDidUpdate(prevProps) {
    let { selectedCountry } = this.props;
    if (selectedCountry !== prevProps.selectedCountry) {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&pageSize=5&apiKey=2d5e0a0ed47a4343a0a5125e191bc8f4`);
            const data = response.data.articles;
            this.setState({ data });
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }
}

  render() {
      {console.log(this.state.data)}
      const { data } = this.state;
      return (
          <div>
            <h1>{!this.props.selectedCountry ? '' : this.props.selectedCountry} News Section!!</h1>
            {data.length > 0 ? 
                data.map((article, index) => <Article  key={index} articleData={article} />)
                :
                <p>Select a country to see the latest headlines</p>
            }
          </div>
      )
  }
}

export default News;