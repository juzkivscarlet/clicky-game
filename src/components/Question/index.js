import React from 'react';
import './style.css';

import Card from './Card';

function Question(props) {
    let ques = props.ques;
    return (
        <div className='jumbotron'>
            <h2 className='display-4 text-center'>{ques.question}</h2>
            <hr className='my-4'/>

            <div className='card-deck d-flex justify-content-around align-content-center'>
                {ques.answerImgs ? 
                    <div className='row mx-auto'>
                        <Card text={ques.answers[0].text} imgUrl={ques.answers[0].image.url} imgSource={ques.answers[0].image.source} letter="A" />
                        <Card text={ques.answers[1].text} imgUrl={ques.answers[1].image.url} imgSource={ques.answers[1].image.source} letter="B" />
                        <Card text={ques.answers[2].text} imgUrl={ques.answers[2].image.url} imgSource={ques.answers[2].image.source} letter="C" />
                    </div>
                    : 
                    <div className='row mx-auto'>
                        <Card text={ques.answers[0].text} imgUrl={null} imgSource="" letter="A" />
                        <Card text={ques.answers[1].text} imgUrl={null} imgSource="" letter="B" />
                        <Card text={ques.answers[2].text} imgUrl={null} imgSourc="" letter="C" />
                    </div>
                }
            </div><br/>

            <center>
                <button type='button' className='btn btn-lg btn-outline-danger dontknow-btn'>I don't know...</button>
            </center>
        </div>
    );
}

export default Question;