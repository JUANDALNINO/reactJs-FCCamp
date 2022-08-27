import React from "react";
import '../stylesSheets/Button.css';

function Button({ text, isBtnClick,  handleClick}) {
    return (
        <button type="button" className={ isBtnClick ? 'clickBtn btn btn-success fs-3' : 'resetBtn btn btn-danger fs-3' }
        onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;