import classes from "./LocationResult.module.css";
import data from "../../assets/stays.json";
import map from "../../assets/map.svg";
import uuid from "react-uuid";

export default function LocationResult({location,changeHandler}){
    let uniquedata=new Set(), filteredLocation;

    filteredLocation= data.filter(ele=>
        {if(!uniquedata.has(ele.city)){
            uniquedata.add(ele.city);
             let enteredLocation=location.toLowerCase(),
             city=ele.city.toLowerCase().trim(),
             country=ele.country.toLowerCase().trim();
            return  city.includes(enteredLocation) || country.includes(enteredLocation)
         }
        }
    )
    return (
        <div className={classes.LocationWrapper}>
            <ul className={classes.filteredList}>
            {
                filteredLocation && filteredLocation.map(ele=>{
                    return <li key={uuid()} className={`${classes.filteredItem} filtereditem`}onClick={changeHandler}><img src={map}/>{ele.city} , {ele.country}</li>
                })
            }
            </ul>
        </div>
    )
}