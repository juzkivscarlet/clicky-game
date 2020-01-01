import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';

function App() {
	return (
		<Wrapper>
			<Navbar />
			<div className='container'></div>
		</Wrapper>
	);
}

export default App;
