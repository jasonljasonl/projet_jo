import React, { Component } from 'react';

class Article3TextBtn extends Component {

    render() { return (
        <div className='Article3textbtn'>
            <h3 id='regle-titre'>{this.props.titre}</h3>
            <p>{this.props.text}</p>
        </div>
    )}
}

export default Article3TextBtn;