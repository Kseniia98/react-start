import React from "react";
import "./Articles.css";
import Article from "../Article";

const info = [
  {
    img:'https://s.yimg.com/uu/api/res/1.2/YUM_keP_KXaSMOdxpM_WYA--~B/aD02NjY7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/mmail.com.my/bb0ba5dcc0db48e255763ad4004303b2',
    header: 'Lorem, ipsum dolor',
    text: 'Dolorem suscipit nam atque. Ipsam, est molestias.',
  },
  {
    img:'https://www.thesprucepets.com/thmb/3opnieEnQiF9nu-C1WCn2f6ityc=/1879x1409/smart/filters:no_upscale()/SiberianCatGettyJeanMichelSegaudEyeEm-48078e579913406a9303e5d954084d15.jpg',
    header: 'Lorem, ipsum dolor!',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img:'https://static.onecms.io/wp-content/uploads/sites/20/2022/03/03/russia-cat-2.jpg',
    header: 'Lorem, ipsum dolor',
    text: 'Adipisicing elit. Dolorem suscipit nam atque. Ipsam',
  },
]

class Articles extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      article: []
    }
  }

  componentDidMount(){
    this.loadinfo();
  }

  loadinfo = () => {
    this.setState((state) =>({
      ...state,
      article: info,
    }) )
  }

  render(){
    return (
      <div className="articles">
        {this.state.article.map((data, index) => <Article key={index} data={data} />)}
      </div>
    )
  }
}

export default Articles;

