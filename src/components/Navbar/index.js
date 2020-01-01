import React from 'react';

function NavbarElement(props) {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<h1 className='navbar-brand'>Clicky Game</h1>

			<div className='collapse navbar-collapse'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<h5 className='nav-link'>Click an image to begin</h5>
					</li>
					<li className='nav-item'>
						<h5 className='nav-link'>Score: {props.score} | Top Score: {props.topScore}</h5>
					</li>
				</ul>
			</div>
		</nav>
	);
}

class Navbar extends React.Component {
	state = {
		score: 0,
		topScore: 0
	}

	incrementScore = () => {
		this.setState({ score: this.state.score+1 });
	}

	resetScore = () => {
		this.setState({ score: 0 });
	}

	incrementTopScore = () => {
		this.setState({ topScore: this.state.topScore+1 });
	}

	render() {
		return (
			<NavbarElement score={this.state.score} topScore={this.state.topScore} />
		);
	}
}

export default Navbar;