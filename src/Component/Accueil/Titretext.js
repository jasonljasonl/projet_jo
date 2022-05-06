import React, { Component } from 'react';

class Titretext extends Component {

    render() { return (
        <div>
            <h1>{this.props.titre}</h1>
            <h2>{this.props.text}</h2>
        </div>
    )}
}

export default Titretext;