import React, { Component } from 'react';



class Counter extends Component {

    componentDidUpdate(prevProps, prevSatet){
        //for Ajax update props
        console.log('prevProps', prevProps)
        console.log('prevSatet', prevSatet)
    }

    render() { 
        return (
              <div>
                  <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
                  <button onClick={ () => this.props.onIncrement(this.props.counter)} 
                  //<button onClick={this.doHandleIncrement} 
                  className="btn btn-success btn-sm">Add</button>

                  <button onClick={ () => this.props.onDelete(this.props.counter.id)}
                  className="btn btn-danger btn-sm m-2">Delete </button>
            
              </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        
        const { value } = this.props.counter;
        return  value === 0 ? "Zero" : value;
    }
}
 
export default Counter;