import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAnalyst} from "../../../../store/actions/dataAnalystAction";

export default function DataAnalyst({onClick,className}) {

    const allPolicy = useSelector((state)=>state.allPolicy.allPolicy);
    const dataAnalyst = useSelector((state)=>state.dataAnalyst.dataAnalyst);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (allPolicy){
            dispatch(setAnalyst(true))
        }
    },[allPolicy])

    return<>
        <div onClick={onClick} className={` ${className? className : `max-[500px]:w-[25px] max-[500px]:h-[25px] w-[35px] h-[35px]`} rounded bg-[#8DC14B]/15 `}>
            <div onClick={()=>{
                dispatch(setAnalyst(!dataAnalyst))
            }} className={` w-full h-full p-[5px]`}>
                <div className={`${dataAnalyst===true?  `opacity-100`: `opacity-0`} duration-200 w-full h-full rounded bg-[#8DC14B]`}></div>
            </div>
        </div>
    </>
}