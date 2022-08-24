import React from 'react';
import '../button.css';

function Button({text, clickButton, manageClick}) {
    return (
        <button 
        className={clickButton ? 'click-button' : 'restart-button' }
        onClick={manageClick}>
        {text}
        </button>
    );
}

export default Button;