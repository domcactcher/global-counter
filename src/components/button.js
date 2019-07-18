import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        const { content, method } = this.props;
        return (
            <button className="button" onClick={method}>
                {content}
            </button>
        )
    }
} 