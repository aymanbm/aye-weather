import React from 'react';
// import Weather from './Component/weather';

const Form = (props) => {

    
    return (
        <div className='div-form'>
            <form className="form" onSubmit={props.getWeather}>
                <input type="text" name='city' placeholder='City...'/> <br/>
                {/* <input type="text"  name="country" placeholder='Country...'/> */}
                <button>Get Weather</button>
                
            </form>
        </div>
);
}
export default Form;