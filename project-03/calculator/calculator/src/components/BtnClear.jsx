import '../styles-sheets/BtnClear.css';

const BtnClear = (props) => (
    <div className="btnClear" onClick={props.handleClick}>
        {props.children}
    </div>
);

export default BtnClear;