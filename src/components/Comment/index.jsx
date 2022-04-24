import React from 'react';
import Avatar from '../Avatar';
import Links from '../Links';
import './comment.css'

class Comment extends React.Component{

  render(){
    return(
      <form className='commentForm'>
        <textarea placeholder='Comment'/>
        <div className='commentItems'>
          <Links simpleLink={true}>
            <Avatar src={this.props.user.image} alt={this.props.user.name} />
          </Links> 
          <div>{this.props.user.name}</div>
          <div>{new Date().toLocaleTimeString()}</div>
          <button type='submit'>Отправить</button>
        </div>
      </form>
    )
  }
}

export default Comment;