import React, {useState} from "react";


export default function Switcher({first,second,className,onYes,onNo}) {

    const [isActive,setActive] = useState(0);



        if (isActive===0){
            onYes()
        } else {
            onNo()
        }



    return<>
        <div  className={` ${className? className : `w-[200px]`} h-[45px] rounded-xl bg-[#F2F2F2] flex items-center px-2 relative`}>
            <div className={` ${isActive===0? `translate-x-0` : `translate-x-[100%]`} duration-500 w-1/2 h-[34px] rounded-xl bg-[#8DC14B]/40`}></div>
            <div className={'w-full h-full flex items-center absolute top-0 left-0'}>

                <div onClick={()=>{
                    setActive(0)
                }} className={` ${isActive===0?`text-[#8DC14B]`:``} duration-500 cursor-pointer w-1/2 h-[34px] flex items-center justify-center max-[500px]:text-[12px] text-[14px]`}>
                    {first}
                </div>

                <div onClick={()=>setActive(1)} className={` ${isActive===1?`text-[#8DC14B]`:``} duration-500 cursor-pointer w-1/2 h-[34px] flex items-center justify-center max-[500px]:text-[12px] text-[14px]`}>
                    {second}
                </div>

            </div>
        </div>
    </>
}