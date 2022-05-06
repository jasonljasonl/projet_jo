import React, { Component } from 'react';

class Article3TextBtnAccueil extends Component {

    render() { return (
        <div className='Article3textbtnAccueil'>
            <h3 id='regle-titreAccueil'>{this.props.titre}</h3>
            <p>{this.props.text}</p>
        </div>
    )}
}

export default Article3TextBtnAccueil;