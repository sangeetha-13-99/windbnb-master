import React from "react"; 
import {useState,useEffect} from "react";

const ModalContext=React.createContext(
    {
        isModal:false,
        onshowModal:()=>{},
        onhideModal:()=>{},
        showLocationResult:false,
        showGuestResult:false,
        toggleInputs:()=>{},
    }
)

export const ModalContextProvider=function(props){
    const [isModal,setIsModal]=useState(false);
    const [showLocationResult,setShowLocationResult]=useState(false);
    const [showGuestResult,setShowLGuestResult]=useState(false);  

    function onhideModal(){
        setIsModal(false);
    }
    function toggleInputs(event){
        if(event.target.classList.contains('location-btn')||event.target.classList.contains('location-input')){
            setShowLGuestResult(false);
            setShowLocationResult(true);
        }
        else if(event.target.classList.contains('guest-btn')||event.target.classList.contains('guests-input')){
            setShowLGuestResult(true);
            setShowLocationResult(false);
        }
        else{
            setShowLocationResult(false);
            setShowLGuestResult(false);
        }
    }
    function onshowModal(event){
        toggleInputs(event);
        setIsModal(true);
    }
    return (
        <ModalContext.Provider value={{
            isModal:isModal,
            onshowModal:onshowModal,
            onhideModal:onhideModal,
            showLocationResult,
            showGuestResult,
            toggleInputs
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext;