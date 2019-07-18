import React, { Component } from 'react';
import Button from './button';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = { count: this.props.count }
    }
    render() {
        return (
            <div className="counter">
                <h2 className="page">{this.props.page}</h2>
                <div className="body">
                    <Button
                        content={'-'}
                        method={this.minus}
                    />
                    <h2>Count: {this.state.count}</h2>
                    <Button
                        content={'+'}
                        method={this.plus}
                    />
                </div>
            </div>
        )
    }

    plus = () => {
        const n = this.state.count+1;
        this.setState({ count: n });
        this.props.countChange(n); 
    }

    minus = () => {
        if (this.state.count > 0) {
            const n = this.state.count-1;
            this.setState({ count: n });
            this.props.countChange(n); 
        }
    }
}