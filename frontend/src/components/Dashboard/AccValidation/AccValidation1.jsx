import Input from "./Input";
import AccValidationCSS from './AccValidation.module.css'
const AccValidation1 = () => {
    let id = "#1"
    return ( <div className={AccValidationCSS.accValidation}>
        <p>Account Validation {id}</p>

        <div className={AccValidationCSS.inputs} >
            <div className={AccValidationCSS.inputList} >
            <Input placeholder = "Name" ></Input>     
            <Input placeholder = "Date of birth" ></Input>     
            <Input placeholder = "Profession" ></Input>     
            <Input placeholder = "E-mail" ></Input>     
            <Input placeholder = "Phone Number" ></Input>     
            <Input placeholder = "Password" ></Input>     
            </div>
            <img src="./doctor.png" alt="Doctor" />
        </div>
        
    </div> );
}
 
export default AccValidation1;