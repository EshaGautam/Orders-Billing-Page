
import './Button.css'

const Button =(props)=>{
    return (
      <div className="button-container">
        <button type={props.type} onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    );
}
export default Button