import React, {Component} from 'react';
import './style.css';

class Main extends Component {
    state = { 
        count : 0
     } 
     add()
     {
        this.setState ( {
            count: this.state.count+ 1
        })
     }
     subs()
     {
        this.setState({
            count : this.state.count - 1
        })
     }
     zero(){
        this.setState({
            count:0
        })
     }
    render() { 
        return<>
            <h1>Counter App</h1>
            <h2>{this.state.count}</h2>
            <br/>
            <button id='btn1' onClick={() => {this.add()}}>Increase</button>
            <button id='btn2' onClick={() => {this.zero()}}>Default</button>
            <button id='btn3' onClick={() => {this.subs()}}>Decrease</button>
           
        </>
    }
}
 
export default Main;