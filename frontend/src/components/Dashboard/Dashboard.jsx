import Lists from "./Lists/Lists";
import DashboardCSS from "./Dashboard.module.css"
import NavbarCSS from "../Navbar/Navbar.module.css"
import AccValidation1 from "./AccValidation/AccValidation1";

const Dashboard = () => {
    return ( 
        <div className={DashboardCSS.dashboard} >
            <div         >
                <button className={DashboardCSS.button} >Patients</button>
                <button className={DashboardCSS.button} >Doctors</button>
                <button className={DashboardCSS.button} >Pharmacists</button>
            </div>
            { /* <Lists /> */ }
            <AccValidation1 />

        </div>
     );
}
 
export default Dashboard;