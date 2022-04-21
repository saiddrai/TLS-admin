import Lists from "./Lists/Lists";
import DashboardCSS from "./Dashboard.module.css"
import NavbarCSS from "../Navbar/Navbar.module.css"
import AccValidation1 from "./AccValidation/AccValidation1";
import AccValidation2 from "./AccValidation/AccValidation2/AccValidation2";
import { useState } from "react";

const Dashboard = (props) => {

    const [buttonColor, setButtonColor ] = useState("white");
    const setHome= () => {
        props.setHome(!props.home)
        }
    let usage = "validate"


    return ( 
        <div className={DashboardCSS.dashboard} >
            <div         >
                {(usage ==="validate") ? <button className = {DashboardCSS.button}>All</button> : null}
                <button className={DashboardCSS.button} >Patients</button>
                <button className={DashboardCSS.button} >Doctors</button>
                <button className={DashboardCSS.button} >Pharmacists</button>
            </div>
            { /* <Lists /> */ }
            {/* <AccValidation1 /> */}
            <Lists notHome = {props.notHome} button = {usage} />


        </div>
     );
}
 
export default Dashboard;