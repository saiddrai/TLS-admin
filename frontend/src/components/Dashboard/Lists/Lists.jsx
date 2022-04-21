import { valid } from "joi";
import Element from "./Element";
import ListsCSS from "./Lists.module.css"

const Lists = (props) => {

    let validate = (props.button) ? props.button : null;
    let list = validate ? ["doctor","doctor","doctor","doctor","doctor","doctor","doctor","doctor","doctor"]:["#1","#2","#3","#4","#5","#6"]



    return ( <div className={ListsCSS.lists}>
        {
            list.map( id => <Element notHome = {props.notHome} id = {id} key = {id} button = {validate ? validate : null } /> )
        }
    </div> );
}
 
export default Lists;