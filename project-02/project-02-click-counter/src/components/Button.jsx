import React from "react";

function Button({ text, isBtnClick,  handleClick}) {
    return (
        <button type="button" className={ isBtnClick ? 'clickBtn btn btn-success' : 'resetBtn btn btn-danger' }
        onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;