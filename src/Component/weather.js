import React from 'react';

const Weather = (props) => {
    return (
        <div className='weather'>
            { props.temperature && 
            <p className='details'> 
                <span className='data'>Temperature <div className='content'>{props.temperature}°C</div>  </span> 
            </p>}
            {
            props.city &&
            <p className='details'>  
                <span className='data'>City <div className='content'>{props.city}</div> </span>
            </p>}
            {props.country &&
            <p className='details'>  
                <span className='data'>Country <div className='content'>{props.country}</div> </span>
            </p>  }
            {props.humidity &&
            <p className='details'>  
                <span className='data'>Humidity <div className='content'>{props.humidity}%</div> </span> 
            </p>}
            {props.description &&
            <p className='details'>  
                <span className='data'>description <div className='content'>{props.description}</div> </span>
            </p>}
            {props.msg &&
            <p className='details error '>{props.msg}
            </p>}
        </div>
    );
}
export default Weather;