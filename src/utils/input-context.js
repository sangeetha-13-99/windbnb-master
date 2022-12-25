import React from "react"; 
import data from "../assets/stays.json";
import { useState,useEffect ,useReducer,useContext} from "react";
import ModalContext from "./modal-context"; 

const InputContext=React.createContext({
    dataobj:{},
    location:'',
    guest:'',
    adultscount:{},
    childcount:{},
    locationChangeHandler:()=>{},
    adultIncFunc:()=>{},
    adultDecFunc:()=>{},
    childIncFunc:()=>{},
    childDecFunc:()=>{},
    searchHandler:()=>{}
})

function adultsReducerFunction(state,action){
    if(action.type=="increment"){
        return {
            adults:state.adults +1
        }
    }
    else{
        return {
            adults:state.adults - 1
        }
    }
}
function childReducerFunction(state,action){
    if(action.type=="increment"){
        return {
            child:state.child +1
        }
    }
    else{
        return {
            child:state.child - 1
        }
    }
}
export const InputContextProvider=function(props){

    const context=useContext(ModalContext);
    const [location,setLocation]=useState('');
    const [dataobj,setData]=useState(data);
    const [guest,setGuest]=useState('');
    const [adultscount,setAdultscount]=useReducer(adultsReducerFunction,{adults:0});
    const [childcount,setChildcount]=useReducer(childReducerFunction,{child:0});

    useEffect(()=>{
        setGuest(adultscount.adults+childcount.child);
    },[adultscount.adults,childcount.child]);

    function adultIncFunc(){
        setAdultscount({type:'increment'})
    }
    function adultDecFunc(){
        !adultscount.adults<=0 && setAdultscount({type:'decrement'})
    }
    function childIncFunc(){
        setChildcount({type:'increment'})
    }
    function childDecFunc(){
        !childcount.child<=0 &&  setChildcount({type:'decrement'})
    }
    function searchHandler(){
        let[city,country]=location.split(','),noOfGuest=guest,newDataobj;
        if(city.trim()!='' && country.trim()!=''){
            newDataobj=data.filter((hotelDetail)=>{
                if(hotelDetail.city==city.trim() && hotelDetail.country==country.trim() && noOfGuest<=hotelDetail.maxGuests){
                    return  hotelDetail;
                }
            })
            setData(newDataobj?.length>0?newDataobj:[]);
        }
        else{
            setData(data);
        }
        context.onhideModal();
    }

    function locationChangeHandler(event){
        if(event.target.classList.contains('filtereditem')){
            setLocation(event.target.textContent);
        }
        else{
            setLocation(event.target.value);
        }
    }
    return (
        <InputContext.Provider value={{
            dataobj,
            location,
            guest,
            childcount,
            adultscount,
            locationChangeHandler,
            searchHandler,
            adultIncFunc,
            adultDecFunc,
            childIncFunc,
            childDecFunc,
        }}>
            {props.children}
        </InputContext.Provider>
    )
}

export default InputContext;