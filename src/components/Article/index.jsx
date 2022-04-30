import React from "react";
import "./Article.css";

function Article(props){
  return (
    <article className="article">
    <img src={props.data.img} alt="cat" />
    <h4>{props.data.header}</h4>
    <p>{props.data.text}</p>
    <button>Подробнее</button>
  </article>
  )
}

export default Article;