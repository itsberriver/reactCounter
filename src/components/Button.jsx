import React from 'react';
import '../stylesheets/Button.css';

function Button ({text, isClickButton, manageButton}){
    
    return(
        <button
        className = { isClickButton ? 'click-button' : 'reset-button' }
        onClick = { manageButton }>
            {text}
        </button>
    );
}

export default Button;

