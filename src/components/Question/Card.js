import React from 'react';

function Card(props) {
    return (
        <div className='card'>
            {props.imgUrl && 
                <img src={props.imgUrl} className='card-img-top' alt='Answer thumbnail' />
            }
            <div className='card-body'>
                <h5 className='card-title text-center'>{props.text}</h5>
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