import React, { Component } from 'react';

class Stopwatch extends Component {

  state = {
  	timerOn: false,
  	timeStart: 0,
  	timerTime: 0
  }

  startTimer = () => {
  	this.setState({
  		timerOn: true,
  		timerStart: Date.now() - this.state.timerTime
  	})

  this.timer = setInterval(()=> {
  	this.setState({
  		timerTime: Date.now() - this.state.timerStart,
  	})
  }, 10)

  }

  stopTimer = () => {
  	this.setState({
  		timerOn: false,
  	})
  	clearInterval(this.timer);
  }

  resetTimer = () => {
    if (this.state.timerOn === false){
    	this.setState({
    		timerStart: 0,
    		timerTime: 0
    	})
    }
  }


  render() {

  	const {timerTime} = this.state;

  	let centiseconds = ("0" + (Math.floor(timerTime / 10)% 100)).slice(-2);
	let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
	let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
	let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div>
        <p>{hours} : {minutes} : {seconds} : {centiseconds}</p>

        {this.state.timerOn === false && (
        	<button onClick={this.startTimer}>Start</button>
        	)}
        {this.state.timerOn === true && (
        	<button onClick={this.stopTimer}>Stop</button>
        	)}
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );

  }
}

export default Stopwatch;
