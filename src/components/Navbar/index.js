import React from 'react';

function Navbar(props) {
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

export default Navbar;