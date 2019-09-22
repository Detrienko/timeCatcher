import React, { Component } from 'react';

import Stopwatch from '../Stopwatch/Stopwatch';
import CountDown from '../CountDown/CountDown';
import Statistics from '../Statistics/Statistics';

class MainDisplay extends Component {

	render(){
		return(
			<div>
				<Stopwatch/>
				<CountDown/>
				<br/><br/><br/>
				<button>ADD HOURS</button>
				<p>|</p>
				<p>|</p>
				<p>|</p>
				<p>w</p>
				<Statistics/>
			</div>
			)
	}

}

export default MainDisplay;