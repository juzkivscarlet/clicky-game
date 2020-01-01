import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Head from './components/Head';
import Question from './components/Question';

import questionsArr from './components/Question/questions';

function App() {
	return (
		<Wrapper>
			<Navbar />
			<Head />
			<div className='container'>
				<Question ques={questionsArr[1]} />
			</div>
		</Wrapper>
	);
}

export default App;
