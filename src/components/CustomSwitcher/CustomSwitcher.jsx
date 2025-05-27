import React, {useState} from "react";


export default function CustomSwitcher({first,second,third,className,onFirst,onSecond,onThird}) {

    const [isActive,setActive] = useState(0);

    if (isActive===0){
        onFirst()
    }
    if (isActive===1){
        onSecond()
    }
    if (isActive===2){
        onThird()
    }

    return<>
        <div  className={` ${className? className : `w-[300px]`} h-[45px] rounded-xl bg-[#F2F2F2] flex items-center px-2 relative`}>
            <div style={{transform:`translateX(${100*isActive}%)`}} className={` duration-500 w-1/3 h-[34px] rounded-xl bg-[#8DC14B]/40`}></div>
            <div className={'w-full h-full flex items-center text-center absolute top-0 left-0'}>

                <div onClick={()=>setActive(0)} className={` ${isActive===0?`text-[#8DC14B]`:``} duration-500 cursor-pointer w-1/3 h-[34px] flex items-center justify-center max-[500px]:text-[10px] text-[14px]`}>
                    {first}
                </div>

                <div onClick={()=>setActive(1)} className={` ${isActive===1?`text-[#8DC14B]`:``} duration-500 cursor-pointer w-1/3 h-[34px] flex items-center justify-center max-[500px]:text-[10px] text-[14px]`}>
                    {second}
                </div>

                <div onClick={()=>setActive(2)} className={` ${isActive===2?`text-[#8DC14B]`:``} duration-500 cursor-pointer w-1/3 h-[34px] flex items-center justify-center max-[500px]:text-[10px] text-[14px]`}>
                    {third}
                </div>

            </div>
        </div>
    </>
}