import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM  from "react-dom";
import {useContext} from "react";
import ModalContext from "../../utils/modal-context"; 

function Backdrop(props){
    return (
        <div className={classes.backdrop} onClick={props.onhideModal}>
        </div>
    );
}
function ModalOverlay(props){
    return(
        <div className={classes.modal}>
            {props.children}
        </div>
    );
}
export default function Modal(props){
    const context=useContext(ModalContext);
    let portalElement=document.getElementById("overlay");
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onhideModal={context.onhideModal}/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay isModal={context.isModal}>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    );
}