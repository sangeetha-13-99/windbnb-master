import uuid from 'react-uuid';
import Card from "./Card";
import sectionCardsClass from "./SectionCards.module.css";
import { useContext } from "react";
import InputContext from "../../utils/input-context";

export default function SectionCards(){
    const contextInput=useContext(InputContext);
    let hotelsData=contextInput.dataobj.map((hotelDetail)=>{
        return  <Card key={uuid()} {...hotelDetail} />
    })

    return (
        <div className={sectionCardsClass.wrapper}>
            {hotelsData.length>0 ? hotelsData : "Oh noo we have'nt found any hotels with that location / number of guest"}
        </div>
    )
}