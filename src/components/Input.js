import "./Input.css"
const Input =(props)=>{
return (
  <div className="form-input">
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
 
    ></input>
  </div>
);
}

export default Input