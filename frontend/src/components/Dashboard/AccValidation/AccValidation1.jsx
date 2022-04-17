import Data from "./Data";
import doctor from "../../../assets/doctor.png";
import AccValidationCSS from './AccValidation.module.css';


const AccValidation1 = () => {
    let id = "#1";
    let dataList = ["Noah Miller", "18/02/2022","Neurological surgeon","Noah_Miller@exemple.com","07****","*******"];
    return ( <div className={AccValidationCSS.accValidation}>
        <p>Account Validation {id}</p>

        <div className={AccValidationCSS.inputs} >
            <div className={AccValidationCSS.inputList} >
                {
                dataList.map( (data)=> <Data element = {data} /> )
                }
            </div>
            <img src={doctor} alt="Doctor" 
           style={{height : "40vh"}} />
        </div>
        
    </div> );
}
 
export default AccValidation1;