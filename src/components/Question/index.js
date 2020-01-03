import React from 'react';
import './style.css';

import Card from './Card';

function Question(props) {
	let ques = props.ques;
	return (
		<div className='jumbotron'>
			<h2 className='display-4'>Question #{ques.index}</h2>
			<p className='lead font-italic'>{ques.question}</p>
			<hr className='my-4'/>

			<div className='card-deck d-flex justify-content-around align-content-center'>
				<Card answer={ques.answers[0]} />
				<Card answer={ques.answers[1]} />
				<Card answer={ques.answers[2]} />
			</div><br/>

			<center>
				<button type='button' className='btn btn-lg btn-outline-danger dontknow-btn'>I don't know...</button>
			</center>
		</div>
	);
}

export default Question;