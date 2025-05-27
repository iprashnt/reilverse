import React from "react";
import style from "./style.module.css";
import edit_icon from "../../Reilverse_Assets/edit (6) 1.svg";
import Confirmation from "./components/Confirmation/Confirmation";
import white_vector from "../../Reilverse_Assets/Vector white.svg";

export default function ConfirmationPayment() {

    return<>
        <div className={style.container}>

            <div className={'w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20'}>

                <div className={'w-full flex items-start max-[950px]:flex-col h-auto gap-10'}>
                    <Confirmation/>

                    <div className={'max-[950px]:w-full w-[350px] h-auto bg-gradient-to-b to-transparent p-[1px] rounded-t-xl'}>

                        <div className={'w-full rounded-t-xl flex flex-col items-start bg-gradient-to-b from-white to-white/30 p-4'}>

                            <div className={'w-full flex items-start justify-between'}>
                                <div className={'flex flex-col items-start text-start'}>
                                    <span className={'text-[16px]'}>Policy Details</span>
                                    <span className={'text-[16px] text-[#1A45D6] flex items-center '}>Type 3 </span>
                                </div>

                                <div className={'flex flex-col items-start text-end'}>
                                    <span className={'text-[24px]'}>S$300</span>
                                    {/* <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] text-[#1A45D6] '}>per year</span> */}
                                </div>
                            </div>

                            <div className={'w-[80%] h-0.5 self-center border border-[#C7C7C7] border-dashed my-5'}></div>

                            <div className={'w-full flex items-start justify-between mb-8'}>
                                <div className={'flex flex-col items-start text-start'}>
                                    <span className={'text-[16px]'}>Policy Details</span>
                        
                                </div>

                                <div className={'flex flex-col items-start text-end'}>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] '}>S$300</span>
                                
                                </div>
                            </div>

                            <div className={'w-[80%] h-0.5 self-center border border-[#C7C7C7] border-dashed my-5'}></div>

                            <div className={'w-full flex items-start justify-between mb-24'}>
                                <div className={'flex flex-col items-start text-start'}>
                                    <span className={'text-[16px]'}>Sub-total</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[16px]'}>+ Stamp duty</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[16px]'}>+ VAT</span>
                                </div>

                                <div className={'flex flex-col items-start text-end'}>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] '}>S$290</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] '}>S$9</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] '}>S$1</span>
                                </div>
                            </div>

                            <div className={'w-full flex items-start justify-between mt-2'}>
                                <div className={'flex flex-col items-start text-start'}>
                                    <span className={'text-[21px]'}>Final Price</span>
                                    <p className={'text-[10px] max-w-[150px] '}>By continuing, you have agreed to our <span className={'text-[#1A45D6]'}>Privacy Policy</span>  and <span className={'text-[#1A45D6]'}>T&C</span> </p>
                                </div>

                                <div className={'flex flex-col items-start text-end'}>
                                    <span className={'text-[24px] text-[#1A45D6]'}>S$300</span>
                                </div>
                            </div>

                            <div className={'flex flex-col items-center mt-5'}>

                                <div className={'w-[175px] h-10 rounded-lg bg-[#1A45D6] text-white flex items-center justify-center'}>

                                    <span className={'text-[12px]'}>Confirm and pay</span>

                                    <img className={'w-[19px] h-[13px] object-contain ml-3 translate-y-0.5'} src={white_vector} alt={'white vector'}/>

                                </div>

                                <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[10px]'}>Get your policy online instantly!</span>

                            </div>


                        </div>

                    </div>


                </div>

            </div>

        </div>
    </>
}