import React, {useState} from "react";
import style from "./style.module.css";
import {CiSearch} from "react-icons/ci";
import Switcher from "../../components/Switcher/Switcher";
import {DatePicker, Select} from "antd";
import {Option} from "antd/es/mentions";
import input_logo from "../../Reilverse_Assets/input_logo.svg";
import "./style.css";
import {IoFemaleSharp, IoMale} from "react-icons/io5";
import CustomSwitcher from "../../components/CustomSwitcher/CustomSwitcher";
import {IoIosArrowForward} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import Allpolicy from "./components/allpolicy/allpolicy";
import PersonalOffer from "./components/personalOffer/personalOffer";
import BusinessOffer from "./components/businessOffer/businessOffer";
import DataAnalyst from "./components/dataAnalyst/dataAnalyst";

export default function Driver_info() {

    const [phoneNumber,setNumber] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [gender,setGender] = useState('male');
    const [activeContact,setContact] = useState(false);
    const [dateBirth,setDateBirth] = useState('');
    const [currentInsurer,setInsurer] = useState('');
    const [policyStartDate,setPolicyStart] = useState('');
    const [insuranceType,setInsuranceType] = useState('');
    const [acceptAll,setAccept] = useState(false);

    const [activeOffers,setActiveOffers] = useState(0);

    const allPolicy = useSelector((state)=>state.allPolicy.allPolicy);
    const personalOffer = useSelector((state)=>state.personalOffers.personalOffers);
    const businessOffer = useSelector((state)=>state.businessOffer.businessOffer);
    const dataAnalyst = useSelector((state)=>state.dataAnalyst.dataAnalyst);
    const dispatch = useDispatch();


    const TAB_MENUS = [
        'Car',
        'Driver',
        'Insurance',
        'Quotes',
    ]

    const MODELS = [
        {
            image: 'https://images.topgear.com.ph/topgear/images/2022/08/18/hyundai-creta-2022-main-1660813139.jpg',
            name:"Creta"
        },
        {
            image: 'https://images.topgear.com.ph/topgear/images/2022/08/18/hyundai-creta-2022-main-1660813139.jpg',
            name:"I10"
        },
        {
            image: 'https://images.topgear.com.ph/topgear/images/2022/08/18/hyundai-creta-2022-main-1660813139.jpg',
            name:"Verna"
        },
        {
            image: 'https://images.topgear.com.ph/topgear/images/2022/08/18/hyundai-creta-2022-main-1660813139.jpg',
            name:"Grand i10 Nios"
        }
    ]

    const TodayHandler = () => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth()+1;
        const currentDay = new Date().getDate();
        setPolicyStart(`${currentYear}-${currentMonth}-${currentDay}`)
    }

    const WeekHandler = () => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth()+1;
        const currentDay = new Date().getDate();
        setPolicyStart(`${currentYear}-${currentMonth}-${currentDay+7}`)
    }
    console.log(allPolicy)
    return<>
        <div className={style.container}>
            <div className={'w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-row items-center pb-20'}>

                <div className={'flex flex- items-center self-start gap-1 max-[450px]:flex-wrap '}>

                    {TAB_MENUS.map((value, index)=> <div className={'flex items-center  '}>

                        <div key={index} style={{fontFamily: 'Arboria-Medium',fontWeight:'400'}} className={style.tabs}>
                            {value}
                        </div>
                        <div className={` ${index===3? `hidden`:``} max-[500px]:hidden max-[1000px]:w-10 w-20 h-0.5 bg-white max-[600px]:mx-0.5 mx-3`}></div>
                    </div>)}

                </div>

                <div className={'w-full flex flex-col items-start bg-gradient-to-b from-white/70 to-white/30 text-start mt-4 px-5 pt-3 pb-20 rounded-t-xl'}>

                    <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>What is your phone number ?</span>
                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Need Help ?</span>

                    <div className={'flex flex-col items-start mt-3'}>

                        <div className={'relative -translate-x-1 mt-2'}>
                            <CiSearch className={'text-[28px] absolute top-3 left-2 text-[#8DC14B]'} />
                            <input onChange={(e)=>setNumber(e.target.value)} style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Example : 080-8809 987'} className={' max-[500px]:w-[255px] w-[400px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}/>
                        </div>

                    </div>

                    <div className={'w-auto flex items-start gap-7 max-[1150px]:flex-col mt-7'}>

                        <div className={'flex flex-wrap gap-5 items-start max-w-[600px] '}>

                            <div className={'h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your first name ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-3'}>Need Help ?</span>
                                </div>
                                <input onChange={(e)=>setFirstName(e.target.value)} style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'First Name'} className={' max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-6 border-[#8DC14B]'}/>
                            </div>

                            <div className={'h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your Last name ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-3'}>Need Help ?</span>
                                </div>
                                <input onChange={(e)=>setLastName(e.target.value)} style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Last Name'} className={' max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-6 border-[#8DC14B]'}/>
                            </div>

                            <div className={'h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your email ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-3'}>Need Help ?</span>
                                </div>
                                <input onChange={(e)=>setEmail(e.target.value)} style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Ex : gmail.com'} className={' max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-6 border-[#8DC14B]'}/>
                            </div>

                            <div className={'h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your gender ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-3'}>Need Help ?</span>
                                </div>
                                <div className={'relative'}>
                                    {
                                        gender==='male'? <IoMale className={'absolute text-4xl text-[#8DC14B] top-1.5 left-2 z-10 '} />:
                                            <IoFemaleSharp className={'absolute text-4xl text-[#8DC14B] top-1.5 left-2 z-10 '} />
                                    }


                                    <Select
                                        placeholder={'Male'}
                                        onChange={(value)=>setGender(value)}
                                        style={{ fontFamily: "Arboria-Light", fontWeight: "400" }}
                                        className={' max-[500px]:w-[180px] w-[200px] h-[50px] rounded-lg outline-0 border shadow-inner  border-[#8DC14B]'}
                                        suffixIcon={<img src={input_logo} alt={'input logo'} className={'w-[24px] h-[18px] object-contain'}  />} // добавление иконки ввода
                                    >
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                    </Select>
                                </div>
                            </div>

                        </div>

                        <div className={'h-20 w-0.5 bg-[#8DC14B] max-[1150px]:hidden'}></div>

                        <div className={'flex flex-col items-start text-start ml-7 max-[1150px]:ml-0'}>

                            <div className={' max-w-[440px] h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>Do you allow us to contact you everyday include Sundays and holidays?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-6'}>Need Help ?</span>
                                </div>
                                <Switcher onYes={()=>setContact(true)} onNo={()=>setContact(false)} first={'Yes'} second={'No'}/>
                            </div>

                            <div className={' max-w-[440px] h-auto justify-between flex flex-col items-start text-start mt-7'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What is your date of birth ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-6'}>Need Help ?</span>
                                </div>
                                <DatePicker
                                    className={'outline-0 border border-[#8DC14B] '}
                                    onChange={(date, dateString)=>setDateBirth(dateString)}
                                    format="YYYY-MM-DD"
                                    placeholder="YYYY / MM / DD"
                                />
                            </div>

                        </div>


                    </div>


                </div>

                <div className={'w-full rounded-t-xl h-auto bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] relative'}>

                    <div className={'absolute -top-4 right-8 w-[180px] h-10 bg-white flex flex-col items-center justify-center text-[24px] text-[#8DC14B]'}>
                        Insurance
                    </div>

                    <div className={'w-full rounded-t-xl flex flex-col items-start bg-white h-auto px-5 pb-20 pt-3 '}>

                        <span className={'text-[36px] max-[500px]:text-[28px] font-[400] '}>What is your current insurer ?</span>
                        <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>Need Help ?</span>

                        <div className={'flex flex-col items-start mt-3'}>

                            <div className={'relative -translate-x-1 mt-2'}>
                                <CiSearch className={'text-[28px] absolute top-3 left-2 text-[#8DC14B]'} />
                                <input style={{fontFamily:"Arboria-Light",fontWeight:"400"}} placeholder={'Select car insurance'} className={' max-[500px]:w-[255px] w-[400px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#8DC14B]'}/>
                            </div>

                        </div>


                        <div className={'w-full max-w-[900px] flex flex-wrap items-start justify-start max-[500px]:gap-x-1 gap-x-14  gap-y-8 mt-8'}>
                            {MODELS.map((value, index)=> <div onClick={()=>setInsurer(value.name)} className={'p-[1px] bg-gradient-to-b from-[#8DC14B] to-transparent rounded-t-xl '}>

                                <div key={index} className={`${currentInsurer===value.name?`bg-white/50`:`bg-white`} duration-300 w-[170px] h-[120px] max-[365px]:w-[120px] max-[500px]:w-[140px] flex flex-col items-center justify-center rounded-t-xl`}>

                                    <img className={'w-[100px] h-[70px] max-[365px]:w-[70px] object-contain'} src={value.image} alt={'car brands'}/>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}}>{value.name}</span>
                                    <span className={'text-[13px]'} style={{fontFamily:"Arboria-Book",fontWeight:"400"}}>{value.name}</span>

                                </div>

                            </div>)}
                        </div>

                        <div className={'w-full flex max-[1150px]:flex-wrap items-start justify-start gap-20 mt-10'}>

                            <div className={'h-[180px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>When do you want your policy to start ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-6'}>Need Help ?</span>
                                </div>
                                <CustomSwitcher onFirst={TodayHandler} onSecond={WeekHandler} onThird={()=>console.log('')} className={'w-[380px] max-[500px]:w-[280px]'} first={'Today'} second={'Next week'} third={"I don't know yet."}/>
                                <DatePicker
                                    className={'outline-0 border border-[#8DC14B] mt-4'}
                                    onChange={(date, dateString)=>console.log(dateString)}
                                    format="YYYY-MM-DD"
                                    placeholder="DD / MM / YYYY"
                                />
                            </div>

                            <div className={'w-0.5 h-20 bg-[#8DC14B] max-[660px]:hidden self-center max-[1150px]:hidden'}></div>

                            <div className={'h-[140px] max-[500px]:h-auto justify-between flex flex-col items-start text-start'}>
                                <div className={'flex flex-col items-start '}>
                                    <span className={'text-[21px]'}>What insurance would you like to buy ?</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] mb-6'}>Need Help ?</span>
                                </div>
                                <CustomSwitcher onFirst={()=>setInsuranceType('voluntary')} onSecond={()=>setInsuranceType('compulsory')} onThird={()=>setInsuranceType('both')} className={'w-[380px] max-[500px]:w-[280px]'} first={'Voluntary'} second={'Compulsory'} third={"Both"}/>
                            </div>

                        </div>

                    </div>

                </div>

                <div className={'w-full rounded-t-xl h-auto bg-gradient-to-b from-[#8DC14B] to-transparent p-[1px] relative mt-7'}>

                    <div className={'absolute -top-4 right-8 max-[500px]:w-[150px] w-[180px] max-[500px]:h-8 h-10 bg-white flex flex-col items-center justify-center text-[24px] max-[500px]:text-[18px] text-[#8DC14B]'}>
                        Consent
                    </div>

                    <div className={'w-full rounded-t-xl flex flex-col items-start bg-white h-auto px-5 pt-3 '}>

                        <p style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[20px] text-start max-[500px]:text-[16px]'}>We value your privacy and want to ensure you have the best experience with us. Here's how we'd like to use your data to tailor our products and services to you:</p>

                        <div className={'flex flex-col items-start gap-2 pl-2 mt-7'}>

                            <div className={'flex items-start gap-4'}>

                                <div className={'w-[35px] h-[35px] block'}>
                                    <Allpolicy />
                                </div>

                                <div className={'flex flex-col items-start text-start'}>

                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[20px] '}>Accept All</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] '}>By choosing this option, you're agreeing to all the below.</span>

                                </div>

                            </div>


                            <div className={'flex items-start gap-4'}>

                                <div className={'w-[35px] h-[35px] block'}>
                                    <PersonalOffer  />
                                </div>

                                <div className={'flex flex-col items-start text-start'}>

                                    <span className={'text-[18px] '}>Personalized Offers and Communications</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] '}>Receive special offers, promotions, and updates from Rielverse,</span>

                                </div>

                            </div>

                            <div className={'flex items-start gap-4'}>

                                <div className={'w-[35px] h-[35px] block'}>
                                    <BusinessOffer />
                                </div>

                                <div className={'flex flex-col items-start text-start'}>

                                    <span className={'text-[18px] '}>Offers from Our Business Partners</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] '}>Get access to exclusive offers and promotions from</span>

                                </div>

                            </div>

                            <div className={'flex items-start gap-4'}>

                                <div className={'w-[35px] h-[35px] block'}>
                                    <DataAnalyst />
                                </div>

                                <div className={'flex flex-col items-start text-start'}>

                                    <span className={'text-[18px] '}>Data Analytics</span>
                                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[14px] '}>Allow us to use your data to improve our products and services. This data will be analyzed by</span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={'overflow-hidden w-80 h-20 max-[630px]:w-28 max-[630px]:h-12 max-[850px]:w-44 max-[850px]:h-14 max-[1200px]:w-52 max-[1200px]:h-16 flex pl-7 max-[630px]:text-start items-center self-start rounded-2xl max-[630px]:text-[16px] max-[850px]:text-xl text-[24px] text-white font-semibold bg-gradient-to-tl from-[#93c347] to-[#b8cf29] relative mt-7'}>
                    <span className={'font-[400] max-[630px]:-translate-x-3'}>Get Quote</span>
                    <IoIosArrowForward className={'text-[250px] absolute -right-8 max-[630px]:-right-12 max-[630px]:text-[150px] max-[850px]:text-[200px] max-[850px]:-right-14 max-[1200px]:-right-16 opacity-40'} />
                </div>

                <div className={'w-full flex flex-col items-start text-start mt-7'}>

                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[15px] '}>By clicking "Get Quote", you agree to the Terms and Conditions and acknowledge our Privacy Policy.</span>
                    <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[15px] mt-3 '}>You can withdraw your consent at any time via support@rielverse or Tel. 9090999.</span>

                </div>

                <div className={'flex flex-col items-start text-start mt-16'}>

                    <span className={'text-[21px] max-[500px]:text-[17px]'}>Remark</span>

                    <p>

                        Please answer all the above questions truthfully. If the insured conceals the truth or making a false statement will result in the voiding of this insurance contract. The insurance company has the right to terminate the insurance contract under Section 865 of the Civil and Commercial Code, and may refuse to pay compensation <br/><br/>
                        The Company does not contact customers through other (communication) channels apart from the Company’s official channels under any circumstances.<br/><br/>
                        Please note that under no circumstances shall the Company be held liable or responsible for any claims, losses, damages, expenses, or other inconvenience resulting from or in any way connected with such communication.
                    </p>

                </div>



            </div>

        </div>
    </>
}