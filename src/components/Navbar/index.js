import React from 'react';

function NavbarElement(props) {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<h1 className='navbar-brand'>Geography Trivia</h1>

			<div className='collapse navbar-collapse'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<h5 className='nav-link'>Correct: {props.correct}</h5>
					</li>
					<li className='nav-item'>
						<h5 className='nav-link'>Incorrect: {props.wrong}</h5>
					</li>
				</ul>
			</div>
		</nav>
	);
}

class Navbar extends React.Component {
	state = {
		correct: 0,
		wrong: 0
	}

	incrementCorrect = () => {
		this.setState({ correct: this.state.correct+1 });
	}

	incrementWrong = () => {
		this.setState({ wrong: this.state.wrong+1 });
	}

	render() {
		return (
			<NavbarElement correct={this.state.correct} wrong={this.state.wrong} />
		);
	}
}

export default Navbar;