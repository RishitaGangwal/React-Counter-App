import { toHaveAccessibleDescription, toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, {Component} from 'react'
import  PropTypes  from 'prop-types';
import ThirdComponent from '../learning-examples/ThirdComponent';
import './Counter.css'

class Counter extends Component{
    constructor(){
        super(); //error 1
        this.state = {
         counter : 0,
        // secondCounter : 100
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    render(){
        return (
          <>
          <div class="container">
          <h1 class="title">
    <span class="title-word title-word-1">React</span>&nbsp;
    <span class="title-word title-word-2">Counter</span>&nbsp;
    <span class="title-word title-word-3">App</span>&nbsp;
  </h1>
</div>
          <div className="contain">
            <CounterButton by={1}incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5}incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10}incrementMethod={this.increment}decrementMethod={this.decrement}/>  
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>RESET</button></div>
            </div>  
            </>    
        );
      }


      reset(){
        this.setState( {counter : 0}
             );

      }



      increment(by){

           // console.log(`increment from child  - ${by}`)
      this.setState(
         (prevState) => {
          return {counter : prevState.counter + by}
          }
          );
     

    }

    decrement(by){

        // console.log(`increment from child  - ${by}`)
      this.setState(
      (prevState) => {
       return {counter : prevState.counter - by}
       }
       );
  

 }
}

 class CounterButton extends Component{

    constructor(){
        super(); //error 1
        // this.state = {
        //  counter : 0,
        // // secondCounter : 100
        // }

        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    render(){
        //const style={fontSize: "50px", padding: "15px 30px"};
       return(
      <div className="counter">
            <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            {/* <span className="count">{this.state.counter}</span> */}
           {/* <span className="count">{this.state.secondCounter}</span> */}

      </div>
    )
}

// increment(){
//     //console.log('increment'); 
//    // this.state.counter++;
//     this.setState(
//         (prevState) =>{
//       return {counter : prevState.counter + this.props.by}
//       //secondCounter : this.state.secondCounter + 1
//     }
//     );
//        this.props.incrementMethod(this.props.by);
//       }


//       decrement(){

//         this.setState(
//             (prevState) =>{
//           return {counter : prevState.counter - this.props.by}
          
//         }
//         );
//            this.props.decrementMethod(this.props.by);
//           }
//  }
  
//  CounterButton.defaultProps = {
//          by : 1
//  }

//  CounterButton.propType = {
//         by : PropTypes.number
//  }
 }
export default Counter