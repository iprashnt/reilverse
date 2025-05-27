import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setBusinessOffer} from "../../../../store/actions/businessOfferAction";


export default function BusinessOffer({onClick,className}) {

    const allPolicy = useSelector((state)=>state.allPolicy.allPolicy);
    const businessOffer = useSelector((state)=>state.businessOffer.businessOffer);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (allPolicy){
            dispatch(setBusinessOffer(true))
        }
    },[allPolicy])

    return<>
        <div onClick={onClick} className={` ${className? className : `max-[500px]:w-[25px] max-[500px]:h-[25px] w-[35px] h-[35px]`} rounded bg-[#8DC14B]/15 `}>
            <div onClick={()=>{
                dispatch(setBusinessOffer(!businessOffer))
            }} className={` w-full h-full p-[5px]`}>
                <div className={`${businessOffer===true?  `opacity-100`: `opacity-0`} duration-200 w-full h-full rounded bg-[#8DC14B]`}></div>
            </div>
        </div>
    </>
}