import React from 'react';
import moment from 'moment'

const Article = ({articleData}) => {

    const {title, url, urlToImage, publishedAt } = articleData;
    {console.log(articleData)}
    return(
        <a href={url} className="c-article">
            <img className="c-article__img" src={urlToImage} />
            <div className="c-article-card">
                <p className="c-article-card__publishedAt">{moment(publishedAt).format('LLL')}</p>
                <h1 className="c-article-card__title">{title}</h1>
            </div>
        </a>
    )
}

export default Article;