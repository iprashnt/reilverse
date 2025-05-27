import React, {useState} from "react";
import style from "./style.module.css";
import {IoIosArrowForward, IoLogoInstagram} from "react-icons/io";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import operator from "../../Reilverse_Assets/Clip path group.svg";
import call from "../../Reilverse_Assets/support (7) 1.svg";
import mail from "../../Reilverse_Assets/claim-ass-3 1.svg";
import couple from "../../Reilverse_Assets/Product Image.svg";
import logo from "../../Reilverse_Assets/Logo.svg";
import secure from "../../Reilverse_Assets/secure.png";
import comodo from "../../Reilverse_Assets/image 63345987.svg";
import mcaffe from "../../Reilverse_Assets/image 63345988.png";
import phone from "../../Reilverse_Assets/Group.svg";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import support_guy from "../../Reilverse_Assets/Support_guy.svg";

export default function Health_Insurance() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [agreement,setAgreement] = useState(false);

    return<>
        <div className={style.container}>

            <div className={'w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20'}>

                <div className={'w-full h-auto bg-gradient-to-b  to-transparent p-[1px] rounded-t-xl'}>

                    <div className={'w-full h-auto flex max-[700px]:flex-col max-[700px]:items-center items-start bg-gradient-to-b from-white/90 to-white/30 rounded-t-xl gap-10 px-5 pt-3 pb-20'}>

                        {/*left side*/}
                        <div className={'flex flex-col items-start text-start max-w-[600px]'}>

                            <span className={'text-[24px] max-[500px]:text-[21px] font-[400] '}>Health Insurance</span>
                            <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Please drop your query here and we will call you back soon</span>

                            <div className={'w-auto flex items-start flex-wrap gap-10'}>

                                <div className={'bg-gradient-to-t from-[#1A45D6] to-[7%] to-transparent  pb-[1px] rounded-b-xl mt-4'}>

                                    <input onChange={(e)=>setFirstName(e.target.value)} style={{fontFamily:"Arboria-Book",fontWeight:"400"}} placeholder={'First Name'} className={'w-[270px]  h-[45px] bg-transparent rounded-xl pl-7 outline-0'}/>

                                </div>

                                <div className={'bg-gradient-to-t from-[#1A45D6] to-[7%] to-transparent pb-[1px] rounded-b-xl mt-4'}>

                                    <input onChange={(e)=>setLastName(e.target.value)} style={{fontFamily:"Arboria-Book",fontWeight:"400"}} placeholder={'Last Name'} className={'w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0'}/>

                                </div>

                                <div className={'bg-gradient-to-t from-[#1A45D6] to-[7%] to-transparent pb-[1px] rounded-b-xl mt-4'}>

                                    <input onChange={(e)=>setEmail(e.target.value)} style={{fontFamily:"Arboria-Book",fontWeight:"400"}} placeholder={'Ex : gmail.com'} className={'w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0'}/>

                                </div>

                                <div className={'bg-gradient-to-t from-[#1A45D6] to-[7%] to-transparent pb-[1px] rounded-b-xl mt-4'}>

                                    <input onChange={(e)=>setPhoneNumber(e.target.value)} style={{fontFamily:"Arboria-Book",fontWeight:"400"}} placeholder={'Phone'} className={'w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0'}/>

                                </div>

                            </div>

                            <div className={'overflow-hidden w-[150px] h-10 flex pl-7 max-[630px]:text-start items-center self-start rounded-lg text-[16px] text-white font-semibold bg-gradient-to-tl from-[#1A45D6] to-[#1A45D6] relative mt-7'}>
                                <span className={'font-[400] uppercase'}>Send</span>
                                <IoIosArrowForward className={'text-[150px] absolute -right-5 opacity-40'} />
                            </div>

                            <div className={'flex items-start mt-5 gap-2'}>

                                <div className={'w-[25px] h-[25px] block'}>
                                    <CustomCheckbox className={'w-[25px] h-[25px] shadow'} onClick={()=>setAgreement(!agreement)}/>
                                </div>

                                <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] max-w-[480px] '}>I hereby authorize Universal Sompo General Insurance to contact me on my given mobile number.</span>

                            </div>

                        </div>

                        <div className={'w-[1px] h-[350px] max-[700px]:hidden bg-gradient-to-b from-[#1A45D6] to-transparent mt-10'}></div>

                        {/*right side*/}
                        <div className={'flex flex-col items-start text-start gap-4 mt-10'}>

                            <div className={'flex items-center gap-3'}>

                                <img className={'w-[24px] h-[24px] object-contain '} src={operator} alt={'operator'}/>

                                <div className={'flex flex-col items-start text-start'}>

                                    <span className={'text-[16px] text-[#47740E]'}>Customer Care</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] '}>Looking for help regarding policy?</span>

                                </div>

                            </div>

                            <div className={'flex items-center gap-3'}>

                                <img className={'w-[24px] h-[24px] object-contain '} src={call} alt={'call'}/>

                                <div className={'flex flex-col items-start text-start'}>

                                    <p className={'text-[16px] flex items-start'}>
                                        Call Us :
                                        <span>9999-22-999</span>
                                    </p>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[9px] self-center '}>24/7 available</span>

                                </div>

                            </div>

                            <div className={'flex items-center gap-3'}>

                                <img className={'w-[33px] h-[33px] object-contain '} src={mail} alt={'call'}/>

                                <div className={'flex flex-col items-start text-start'}>

                                    <span className={'text-[16px] text-[#1A45D6]'}>Drop Email At</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] '}>Email-Id</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[12px] '}>help@reilverse.com | support@reilverse.com</span>

                                </div>

                            </div>

                            <img className={'object-contain max-[800px]:w-[259px] max-[800px]:h-fit max-w-[379px] max-h-[207px] mt-10 max-[800px]:self-center self-end'} src={couple} alt={'couple'}/>

                        </div>

                    </div>

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