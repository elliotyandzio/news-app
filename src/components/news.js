import React, { Component } from 'react';
import axios from 'axios';
import Article from './article';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [] //Store the data returned from the api
    }
  }

  //When the component mounts, run the returnNewsData function to retrive the data
  componentDidMount() {
    this.returnNewsData();
  }

  //When the component updates and has new props run the returnNewsData function with the new variables
  componentDidUpdate(prevProps) {
    let { selectedCountryCode } = this.props;
    if (selectedCountryCode !== prevProps.selectedCountryCode) {
        this.returnNewsData();
    }
  }


  //Funnction to return the top 5 news stories from the api
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
            <h1 className="c-news__title">{selectedCountryName} latest news</h1>
            {data.map((article, index) => <Article key={index} articleData={article} />)}
          </div>
      )
  }
}

export default News;