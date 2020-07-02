import React, {Component} from 'react';
 
export default class Counter extends Component{
    constructor(props){

        super(props);

        this.state={
            count: 0,
            result: null
        }
    }

    increment = (x) => { //Added wednesday 
        return x += 1;
    }

    findResult = (x) =>{ //Added wednesday 
        if(x >= 3) {
            return "Limit Reached";
        } else 
        return "";
    }
    decrease = (x) => { //Added for the decrease button
        return x -= 1;    
        }
    endResult = (x) => { //Added for the decrease button
        if(x < 0) {
            return "Can't go lower than 0";
        } else 
        return "";
    }    
    HandleClick = () => { //Added for the decrease button
        const currentCount = this.decrease(this.state.count);
        const currentResult = this.endResult(currentCount);

        if(currentCount < 0) {
            this.setState({
                count: 0,
                result: ""
            })
        } else 
        this.setState({
            count: currentCount,
            result: currentResult
        })
    }

    handleClick = () => { //Added wednesday
        const currentCount = this.increment(this.state.count);
        const currentResult = this.findResult(currentCount);

        if(currentCount > 3) { //Added wednesday
            this.setState({
                count: 0,
                result: ""
            })
        } else 
        this.setState({ //Added wednesday 
            count: currentCount,
            result: currentResult
        })
    }

    render(){
        const currentCount = this.state.count; 
        const result = this.state.result;
        return(
            <div className="counter">
        <h2 className="current-count">{currentCount}</h2>
        <h3 className="result" style={{color: "blue"}}>{result}</h3>
        <button className="increment" onClick={this.handleClick}>
            Increase 
        </button>
        <button className="decrease" onClick={this.HandleClick}>
        Decrease
        </button>
            </div>
        )
    }

}