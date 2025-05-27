import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAllPolicy} from "../../../../store/actions/allPolicyAction";

export default function Allpolicy({className}) {

    const allPolicy = useSelector((state)=>state.allPolicy.allPolicy);
    const personalOffer = useSelector((state)=>state.personalOffers.personalOffers);
    const businessOffer = useSelector((state)=>state.businessOffer.businessOffer);
    const dataAnalyst = useSelector((state)=>state.dataAnalyst.dataAnalyst);
    const dispatch = useDispatch();

    function ClickHandler() {
        dispatch(setAllPolicy(!allPolicy))
    }

    return<>
        <div className={` ${className? className : `max-[500px]:w-[25px] max-[500px]:h-[25px] w-[35px] h-[35px]`} rounded bg-[#8DC14B]/15 `}>
            <div onClick={ClickHandler} className={` w-full h-full p-[5px]`}>
                <div className={`${allPolicy===true?  `opacity-100`: `opacity-0`} duration-200 w-full h-full rounded bg-[#8DC14B]`}></div>
            </div>
        </div>
    </>
}