import starIcon from "../../assets/star.svg";
import cardClass from "./Card.module.css";

export default function Card(props){
    return (
        <div className={cardClass.cardWrapper}>
            <img className={cardClass.cardImage} src={props.photo}></img>
            <div className={cardClass.cardDetails}>
                <div>
                    {props.superHost && <p className={cardClass.cardTag}>Super host</p>}
                    <p className={cardClass.cardType}>{props.type}.{props.beds}beds</p>
                </div>
                <div className={cardClass.cardRating}><img className={cardClass.cardStar} src={starIcon}></img><span>{props.rating}</span></div>
            </div>
            <p className={cardClass.cardTitle}>{props.title}</p>
        </div>
    );
}