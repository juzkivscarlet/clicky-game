import React from 'react';

function Card(props) {
    let answer = props.answer;
    return (
        <div className='card flex-fill text-white bg-dark'>

            <div className='card-header'>{answer.letter})</div>

            {answer.image && 
                <img src={answer.image.url} className='card-img-top' alt='Answer thumbnail' />
            }

            <div className='card-body text-center'>
                <button type='button' className='btn btn-lg btn-primary text-center answer-btn' data-letter={answer.letter}>{answer.text}</button>
            </div>

            <div className='card-footer'>
                {answer.image && 
                    <small className='text-muted'>
                        Image source: 
                        <span className='font-italic'> {answer.image.source}</span>
                    </small>
                }
            </div>
        </div>
    );
}

export default Card;