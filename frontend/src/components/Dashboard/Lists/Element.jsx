import ElementCSS from "./Lists.module.css"

const Element = () => {
    let name = "Noah Milner";
    let date = "18/02/2022";
    let id = "#2";
    return ( <div  className={ElementCSS.element}>
        <p> {name}</p>
        <p> {date} </p>
        <p> {id} </p>
    </div> );
}
 
export default Element;