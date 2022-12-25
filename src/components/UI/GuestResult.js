import classes from "./GuestResult.module.css";
// import { useReducer,useEffect } from "react";
import {useContext} from "react";
import InputContext from "../../utils/input-context";

export default function GuestResult(){
    const contextInput=useContext(InputContext);
    
    return (
        <div className={classes.guestWrapper}>
            <div className={`${classes.guestCount} adults-count`}>
                <p>Adults</p>
                <p>Ages 13 or above</p>
                <div className={classes.btnWrapper}>
                    <button onClick={contextInput.adultDecFunc}>-</button>
                    <span>{contextInput.adultscount.adults}</span>
                    <button onClick={contextInput.adultIncFunc}>+</button>
                </div>
            </div>
            <div className={`${classes.guestCount} child-count`}>
                <p>Children</p>
                <p>Ages 2-12</p>
                <div className={classes.btnWrapper}>
                    <button onClick={contextInput.childDecFunc}>-</button>
                        <span>{contextInput.childcount.child}</span>
                    <button onClick={contextInput.childIncFunc}>+</button>
                </div>
            </div>
        </div>
    )
}