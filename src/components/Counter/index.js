import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement_counter, increment_counter } from '../../action';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    // addOne = () => {
    //     this.setState({
    //         number: this.state.number + 1
    //     });
    // }
    // minusOne = () => {
    //     this.setState({
    //         number: this.state.number - 1
    //     });
    // }
    addOne = () => {
        this.props.dispatch(increment_counter());
    }

    minusOne = () => {
        this.props.dispatch(decrement_counter());
    }
    render() {
        return (
            <div>
                {console.log(this.props)}
                <button onClick={this.addOne}>+ ADD</button>
                <button onClick={this.minusOne}>- SUB</button>
                counter:{this.state.number} || counter:{this.props.number}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        number: state.counter.number
    };
}
export default connect(mapStateToProps)(Counter);