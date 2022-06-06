import React from 'react';
import '../stylesheets/Counter.css';

function Counter({ numberOfClicks }){
    return(
        <div className="counter-container">
            {numberOfClicks}
        </div>

    );
}

export default Counter;