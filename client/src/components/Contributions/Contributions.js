import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contributions extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.user} reciclou {this.props.peso}kg de {this.props.lixo}</h1>
            </div>
        );
    }
}

Contributions.propTypes = {

};

export default Contributions;