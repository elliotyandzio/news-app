import React from 'react';

const Article = ({articleData}) => {
    const {title, description, url, urlToImage, publishedAt, source } = articleData;
    {console.log(source)}
    return(
        <div className="c-article">
            <h1 className="c-article__title">{title}</h1>
            <p className="c-article__description">{description}</p>
            <a className="c-article__url" href={url}>Read full article...</a>
            <img className="c-article__img" src={urlToImage} />
            <p className="c-article__publishedAt">{publishedAt}</p>
            <p className="source">Source - {source.name}</p>
        </div>
    )
}

export default Article;