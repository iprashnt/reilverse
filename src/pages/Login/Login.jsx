import React from "react";
import style from "./style.module.css";
import {CiSearch} from "react-icons/ci";
import white_vector from "../../Reilverse_Assets/Vector white.svg";
import logo from "../../Reilverse_Assets/Logo.svg";
import secure from "../../Reilverse_Assets/secure.png";
import comodo from "../../Reilverse_Assets/image 63345987.svg";
import mcaffe from "../../Reilverse_Assets/image 63345988.png";
import phone from "../../Reilverse_Assets/Group.svg";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {IoLogoInstagram} from "react-icons/io";
import couple from "../../Reilverse_Assets/couple 2.svg";
import support_guy from "../../Reilverse_Assets/Support_guy.svg";

export default function Login() {

    return<>
        <div className={style.container}>

            <div className={'w-full max-[500px]:max-w-[300px] max-[800px]:max-w-[500px] max-w-[780px] h-[570px] bg-gradient-to-b from-[#8DC14B] to-transparent rounded-t-xl p-[1px]'}>

                <div className={'w-full h-full flex flex-col items-center px-4 pt-7 rounded-t-xl bg-gradient-to-b from-white/90 to-white/30'}>

                    <span className={'text-[22px] text-[#47740E]'}>Login with Mobile Number</span>
                    <div className={'relative mt-5'}>
                        <input style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Example : 080-8809 987'} className={' max-[500px]:w-[255px] max-[800px]:w-[355px] w-[550px] h-[55px] rounded-xl outline-0 border shadow-inner pl-6 border-[#8DC14B]'}/>
                    </div>
                    <div className={'w-[175px] h-10 rounded-lg bg-[#8DC14B] text-white flex items-center justify-center mt-7'}>

                        <span className={'text-[12px]'}>Send OTP</span>

                        <img className={'w-[19px] h-[13px] object-contain ml-3 '} src={white_vector} alt={'white vector'}/>

                    </div>

                    <p className={'text-[16px] mt-7'}>By continuing, I agree to <span className={'text-[#47740E]'}> Terms & Conditions</span>  </p>

                    <img className={'object-contain max-[500px]:w-[259px] max-[500px]:h-fit max-w-[379px] max-h-[207px] mt-10 max-[800px]:self-center self-end'} src={couple} alt={'couple'}/>


                </div>

            </div>

            <div className={'w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20'}>

                <div className={'flex flex-col items-center mt-24'}>

                    <img data-aos="zoom-out-up" className={'w-fit h-10 object-containe'} src={logo} alt={"Railverse Logo"}/>

                    <p style={{fontWeight:"400",fontFamily : "Arboria-Book"}} data-aos="zoom-out-up" className={'text-2xl mt-4 opacity-75'}>Powered by Worldbridge Insurance Broker</p>
                    <p style={{fontWeight:"400",fontFamily : "Arboria-Book"}} data-aos="zoom-out-up" className={'text-xl mt-4 opacity-75'}>#10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore 058727</p>

                </div>


            </div>

            <div className={'w-full h-0.5 bg-gray-200/70 mt-32'}></div>

            <div className={'w-full flex max-[850px]:flex-col max-[850px]:gap-4 items-center justify-between max-[850px]:-translate-y-[50px] -translate-y-12 pl-32 max-[730px]:px-4 max-[1200px]:pr-10 max-[1200px]:pl-20 min-[1800px]:pl-80 pr-16'}>

                <div data-aos="fade-right" className={'flex flex-col max-[650px]:items-center relative'}>
                    <div className={` ${style.shadow_inner} max-[500px]:w-[304px] w-[374px] h-[100px] max-[500px]:h-[90px] bg-white flex items-center  rounded-2xl`}>

                        <img className={'w-fit h-[149px] max-[500px]:h-[100px] max-[500px]:-translate-x-2 -translate-x-7 self-end object-contain'} src={support_guy} alt={'support guy'}/>

                        <div style={{fontWeight:"400",fontFamily : "Arboria-Book"}} className={'flex flex-col items-center ml-7 max-[500px]:ml-2 max-[500px]:items-start text-[16px] max-[500px]:text-start font-semibold opacity-50 gap-2 '}>

                            <span  style={{fontWeight:"500"}}>CUSTOMER SERVICE</span>
                            <span className={'text-[18px]'}>1800 2333 533</span>

                        </div>

                    </div>
                </div>

                <div data-aos="fade-left" className={` ${style.shadow_inner} max-[350px]:w-[304px] w-[315px] h-[75px] px-4 bg-white flex items-center justify-center  rounded-2xl`}>

                    <div className={'w-full justify-around flex items-center gap-2'}>

                        <img className={'w-fit h-9 object-contain'} src={secure} alt={'secure'}/>
                        <img className={'w-fit h-6 object-contain'} src={comodo} alt={'comodo'}/>
                        <img className={'w-fit h-5 object-contain'} src={mcaffe} alt={'mcAffe'}/>

                    </div>
                </div>

            </div>

            <div className={'w-full max-[800px]:px-2 max-[1440px]:px-6  max-w-[1190px] min-[1800px]:max-w-[1600px] flex flex-col  items-center'}>

                <p style={{fontWeight:"400",fontFamily : "Arboria-Book"}} data-aos="fade-down" className={'text-start text-[14px] max-[800px]:text-[12px] font-semibold leading-7 opacity-75 '}>Remark<br/><br/>
                    Please answer all the above questions truthfully. If the insured conceals the truth or making a false statement will result in the voiding of this insurance contract. The
                    insurance company has the right to terminate the insurance contract under Section 865 of the Civil and Commercial Code, and may refuse to pay compensation<br/><br/>
                    The Company does not contact customers through other (communication) channels apart from the Company’s official channels under any circumstances.<br/><br/>
                    Please note that under no circumstances shall the Company be held liable or responsible for any claims, losses, damages, expenses, or other inconvenience resulting
                    from or in any way connected with such communication.</p>

            </div>

            <div className={'w-full flex items-end justify-between mt-20'}>

                <div className={'w-[40%] max-[800px]:h-14 h-20 bg-gray-200 rounded-tr-full'}></div>
                <div className={'w-auto flex h-20 items-center justify-between px-10 max-[600px]:px-4 gap-4 text-2xl text-[#47740e] '}>

                    <FaFacebookF />
                    <FaXTwitter  />
                    <FaLinkedinIn  />
                    <IoLogoInstagram  />

                </div>
                <div className={'w-[40%] max-[800px]:h-14 h-20 bg-gray-200 rounded-tl-full'}></div>

            </div>

        </div>
    </>
}