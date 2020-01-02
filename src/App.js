import React from 'react';
import './App.css';

import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Head from './components/Head';
import Question from './components/Question';

import questionsArr from './components/Question/questions';

class App extends React.Component {
	
	state = {
		count: 0,
		questions: questionsArr
	};

	render() {
		return (
			<Wrapper>
				<Navbar />
				<Head />
				<div className='container'>
					<Question ques={this.state.questions[this.state.count]} />
					<br/>
					<Question ques={this.state.questions[this.state.count+1]} />
					<br/>
					<Question ques={this.state.questions[this.state.count+2]} />
					<br/>
					<Question ques={this.state.questions[this.state.count+3]} />
				</div>
			</Wrapper>
		);
	}
}

export default App;
