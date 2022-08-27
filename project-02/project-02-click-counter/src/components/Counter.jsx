import '../stylesSheets/Counter.css';

function Counter({ numClicks} ) {
    return (
        <div className="counter fs-1">
            <p>Your Clicks:</p>
            <p>{numClicks}</p>
        </div>
    );
}

export default Counter;