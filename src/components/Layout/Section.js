import SectionTitle from "../../components/UI/SectionTitle";
import SectionCards from "../../components/UI/SectionCards";
import classes from "./Section.module.css";
export default function Section (){
    return (
        <div className={classes.section}>
            <SectionTitle/>
            <SectionCards/>
        </div>
    )
}