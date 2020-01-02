import React from 'react';

function Card(props) {
    return (
        <div className='card flex-fill text-white bg-dark'>

            <div className='card-header'>{props.letter})</div>

            {props.imgUrl && 
                <img src={props.imgUrl} className='card-img-top' alt='Answer thumbnail' />
            }

            <div className='card-body text-center'>
                <button type='button' className='btn btn-lg btn-primary text-center answer-btn' data-letter={props.letter}>{props.text}</button>
            </div>

            <div className='card-footer'>
                {props.imgSource && 
                    <small className='text-muted'>
                        Image source: 
                        <span className='font-italic'> {props.imgSource}</span>
                    </small>
                }
            </div>
        </div>
    );
}

export default Card;