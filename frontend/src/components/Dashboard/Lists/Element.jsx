import ElementCSS from "./Lists.module.css"
import { Link } from "react-router-dom";

const Element = (props) => {
    let name = "Noah Milner";
    let date = "18/02/2022";
    let button = props.button;
    console.log(button)
    return ( <div  className={ElementCSS.element}>
        <p> {name}</p>
        <p style={{color: "grey"}} > {date} </p>
        <p style={{color: "grey"}} > {props.id} </p>
         {button && <Link to={"/left"} > <button onClick={props.notHome} className={ElementCSS.validate}  > Validate </button> </Link>}
    </div> );
}
 
export default Element;