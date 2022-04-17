import DataCSS from "./AccValidation.module.css";

const Data = (props) => {
    return ( 

        <p className={DataCSS.data} >
            {props.element}
        </p>
     );
}
 
export default Data;