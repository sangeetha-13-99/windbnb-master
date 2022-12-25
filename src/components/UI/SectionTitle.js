import classes from "./SectionTitle.module.css";
import { useContext } from "react";
import InputContext from "../../utils/input-context";
export default function SectionTitle(){
    const contextInput=useContext(InputContext);
    return (
        <div className={classes.filteredDiv}>
            <p className={classes.filteredCountry}>{contextInput.location||'Finland'}</p>
            <p className={classes.filteredStays}>{contextInput.dataobj.length}+ stays</p>
        </div>
    )
}