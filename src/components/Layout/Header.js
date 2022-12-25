import windbnblogo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import classes from "./Header.module.css";
import {useContext} from "react";
import ModalContext from "../../utils/modal-context"; 
import InputContext from "../../utils/input-context";

export default function Header(props){
    const context=useContext(ModalContext);
    const contextInput=useContext(InputContext);

    return (
            <header className={classes.header}>
                <img src={windbnblogo}></img>
                <div className={`${classes.buttons} ${context.isModal?classes.buttonAnimate:classes.buttonUnAnimate}`} onClick={context.onshowModal}>
                    <button className={`${classes.fbtn} location-btn`}>{contextInput.location!==''?contextInput.location:'Add location'}</button>
                    <button className={`${classes.sbtn} guest-btn`}>{contextInput.guest>0?contextInput.guest+' guests':'Add Guest'}</button>
                    <button className={classes.searchbtn}><img src={search}></img></button>
                </div>
            </header>
    )
}