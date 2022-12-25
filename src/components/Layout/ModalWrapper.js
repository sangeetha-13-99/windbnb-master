import Modal from "./Modal";
import search from "../../assets/search-white.svg";
import classes from "./ModalWrapper.module.css";
import {useContext} from "react";
import InputContext from "../../utils/input-context";
import ModalContext from "../../utils/modal-context"; 
import LocationResult from "../UI/LocationResult";
import GuestResult from "../UI/GuestResult";

export  default function ModalWrapper(){
    const context=useContext(ModalContext);
    const contextInput=useContext(InputContext);

    return (
        <Modal>
            <div className={classes.inputwrapper}>
                <div className={classes.inputInnerwrapper}>
                    <div>
                        <div className={classes.inputDiv}>
                            <label className={classes.label}>Location</label>
                            <input value={contextInput.location} onChange={contextInput.locationChangeHandler} placeholder="Add location" onFocus={context.toggleInputs}  className={`${classes.input} location-input`}/>
                        </div>
                       { context.showLocationResult && <LocationResult changeHandler={contextInput.locationChangeHandler} location={contextInput.location}/>}
                    </div>
                    <div>
                        <div className={classes.inputDiv}>
                            <label className={classes.label}>Guests</label>
                            <input readOnly value={`${contextInput.guest>0? contextInput.guest+' guests':''}`}  placeholder="Add guests" onFocus={context.toggleInputs}  className={`${classes.input} guests-input`}/>
                        </div>
                       {context.showGuestResult && <GuestResult/>}
                    </div>
                    <div>
                        <div className={classes.buttonDiv}>
                            <button onClick={contextInput.searchHandler} className={classes.searchButton}><img src={search}/><span>Search</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}