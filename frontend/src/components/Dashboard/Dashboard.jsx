import Lists from "./Lists/Lists";
import DashboardCSS from "./Dashboard.module.css"
import NavbarCSS from "../Navbar/Navbar.module.css"
import AccValidation1 from "./AccValidation/AccValidation1";
import AccValidation2 from "./AccValidation/AccValidation2/AccValidation2";
import { useState } from "react";

const Dashboard = () => {

    const [buttonColor, setButtonColor ] = useState("white");
    const handleClick= () => {
        setButtonColor("blue");
    }
    let id = "#1";


    return ( 
        <div className={DashboardCSS.dashboard} >
            <div         >
                <button className={DashboardCSS.button} >Patients</button>
                <button className={DashboardCSS.button} >Doctors</button>
                <button className={DashboardCSS.button} >Pharmacists</button>
            </div>
            { /* <Lists /> */ }
            <h3>Account Validation {id}</h3>
            {/* <AccValidation1 /> */}
            <AccValidation2 />


        </div>
     );
}
 
export default Dashboard;