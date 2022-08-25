import React from "react";

function Button({ text, isBtnClick }) {
    return (
        <button type="button" className={ isBtnClick ? 'clickBtn' : 'resetBtn' }
        onClick={}>
            {text}
        </button>
    );
}