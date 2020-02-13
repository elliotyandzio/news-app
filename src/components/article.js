import React from 'react';
import moment from 'moment'

const Article = ({articleData}) => {
    const {title, description, url, urlToImage, publishedAt, source } = articleData;
    {console.log(articleData)}
    return(
        <div className="c-article">
            <img className="c-article__img" src={urlToImage} />
            <div className="c-article-card">
                <h1 className="c-article-card__title">{title}</h1>
                <p className="c-article-card__publishedAt">{moment(publishedAt).format('LLL')}</p>
                <p className="c-article-card__description">{description}</p>
                <a className="c-article-card__url" href={url}>Read full article...</a>
            </div>

        </div>
    )
}

export default Article;