import Lists from "./Lists/Lists";
import DashboardCSS from "./Dashboard.module.css"

const Dashboard = () => {
    return ( 
        <div className={DashboardCSS.dashboard} >
            <Lists />
        </div>
     );
}
 
export default Dashboard;