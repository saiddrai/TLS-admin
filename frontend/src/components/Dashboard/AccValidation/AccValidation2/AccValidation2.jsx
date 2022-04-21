import AccValidation2CSS from "./AccValidation2.module.css"
const AccValidation2 = () => {
    return ( <div  className={AccValidation2CSS.main} >
        <h2>Uploaded Files</h2>
        <div className={AccValidation2CSS.file}></div>
        <div className={AccValidation2CSS.file}></div>
        <div className={AccValidation2CSS.file}></div>
        <div className="buttons">
            <button className={AccValidation2CSS.button} >Validate  </button>
            <button  className={AccValidation2CSS.button2}  >Refuse  </button>
        </div>
    </div> );
}
 
export default AccValidation2;