import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setOffer} from "../../../../store/actions/personalOfferAction";

export default function PersonalOffer({onClick,className}) {

    const allPolicy = useSelector((state)=>state.allPolicy.allPolicy);
    const personalOffer = useSelector((state)=>state.personalOffers.personalOffers);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (allPolicy){
            dispatch(setOffer(true))
        }
    },[allPolicy])

    return<>
        <div onClick={onClick} className={` ${className? className : `max-[500px]:w-[25px] max-[500px]:h-[25px] w-[35px] h-[35px]`} rounded bg-[#8DC14B]/15 `}>
            <div onClick={()=>{
                dispatch(setOffer(!personalOffer))
            }} className={` w-full h-full p-[5px]`}>
                <div className={`${personalOffer===true?  `opacity-100`: `opacity-0`} duration-200 w-full h-full rounded bg-[#8DC14B]`}></div>
            </div>
        </div>
    </>
}