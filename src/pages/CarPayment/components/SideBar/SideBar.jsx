import React, {useState} from "react";
import insurance from "../../../../Reilverse_Assets/forte.png";

export default function SideBar(props) {

    
    const [activeAmount,setAmount] = useState('');
    const [activeDriver,setDriver] = useState('');
    const [activeRepair,setRepair] = useState('');
    const [activeService,setService] = useState('');
    const [activeDashCam,setDashCam] = useState('');

    const TYPES = [
        {
            name: "Basic",
            Code : "BASIC",
            amount:21950
        },
        {
            name: "Third Party",
            Code : "C0000532",
            amount:12100
        },
        {
            name: "Wind Screen",
            Code : "WINDSC",
            amount:65
        },
        {
            name: "SRCC",
            Code : "SRCC01",
            amount:650
        },
        {
            name: "Acts of God",
            Code : "AOG01",
            amount:650
        },
        {
            name: "War Risk",
            Code : "WARRSK",
            amount:650
        },
        {
            name: "Theft",
            Code : "THEFT",
            amount:3292.5
        },
        {
            name: "Nill Excess",
            Code : "DEDUCT",
            amount:25000
        },
        {
            name: "Betterment",
            Code : "BTRMNT",
            amount:6585
        },
    ]
    const AMOUNT = [
        {
            name: "No deductible "
        },
        {
            name: "With deductible "
        },
    ]

    const DRIVERS = [
        {
            name: "Unlimited "
        },
        {
            name: "1-2 drivers "
        },
    ]

    const REPAIR = [
        {
            name: "Dealer "
        },
        {
            name: "Garage"
        },
        {
            name: "Executive Care"
        },
    ]

    const SERVICES = [
        {
            name: "Fire/Theft "
        },
        {
            name: "Flood coverage"
        },
        {
            name: "Terrorism"
        },
        {
            name: "Free towing"
        },
    ]

    const DASHBOARD_CAM = [
        {
            name: "Yes"
        },
        {
            name: "No"
        },
    ]

    const isObjectInSecondArray = (object) => {
        return props.activeTypes.some(item => item.name === object.name);
      };

      

    return<>
        <div style={{fontFamily:"Arboria-Medium"}} className={'w-[300px] h-auto rounded-t-xl bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] '}>

            <div className={'flex flex-col items-start p-4 bg-white rounded-xl'}>

                <span className={'text-[14px] '}>My car details</span>

                <div className={'w-[188px] h-10 rounded-lg border border-[#8DC14B] mt-3 flex flex-col items-start pl-1.5 pt-1 relative'}>

                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[9px]'}>TOYOTA 4RUNNER 3.0</span>
                    <span className={'text-[12px] text-[#8DC14B]'}>TOYOTA 4RUNNER 3.0</span>

                </div>

                <div className={'w-[160px] h-[1px] ml-1 bg-gray-200 mt-5'}></div>

                <div className={'flex flex-col items-start mt-5 '}>

                    <span className={'text-[16px]'}>My Plan Preferences</span>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px]'}>Coverage <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex items-start flex-wrap gap-4 mt-2 '}>

                        {TYPES.map((value, index)=> <div key={index} onClick={()=>props.handleAddons(value)} className={` ${isObjectInSecondArray(value)? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} duration-200 w-[70px] h-[25px] cursor-pointer rounded border flex items-center justify-center text-[9px]`}>{value.name}</div>)}

                    </div>

                    {/* <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Provider <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'w-[130px] h-[34px] rounded border border-[#8DC14B] flex justify-center mt-2'}>
                        <img src={insurance} className={'w-fit h-full object-contain'}/>
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Deductible Amount <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {AMOUNT.map((value, index)=> <div key={index} onClick={()=>setAmount(value.name)} className={` ${activeAmount===value.name? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>No. of Drivers <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {DRIVERS.map((value, index)=> <div key={index} onClick={()=>setDriver(value.name)} className={` ${activeDriver===value.name? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Repair Type <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {REPAIR.map((value, index)=> <div key={index} onClick={()=>setRepair(value.name)} className={` ${activeRepair===value.name? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Services & Extras <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {SERVICES.map((value, index)=> <div key={index} onClick={()=>setService(value.name)} className={` ${activeService===value.name? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div>

                    <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] mt-5'}>Dashboard CAM discount <span className={'text-[#8DC14B]'}>?</span> </p>

                    <div className={'flex flex-wrap items-start gap-4 mt-2'}>
                        {DASHBOARD_CAM.map((value, index)=> <div key={index} onClick={()=>setDashCam(value.name)} className={` ${activeDashCam===value.name? `border-[#8DC14B] text-[#8DC14B]` : `border-[#3E3E3E]`} cursor-pointer duration-200 w-[94px] h-[25px] rounded border flex items-center justify-center text-[9px] `}>{value.name}</div>)}
                    </div> */}

                </div>

            </div>

        </div>
    </>
}