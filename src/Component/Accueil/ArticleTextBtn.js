import React, { Component } from 'react';

class ArticleTextBtn extends Component {

    render() { return (
        <div>
            <h1>{this.props.titre}</h1>
            <p>{this.props.text}</p>
            <p id='texte-partie2'>{this.props.textp2}</p>
        </div>
    )}
}

export default ArticleTextBtn