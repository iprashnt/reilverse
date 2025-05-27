import React, {useEffect, useState} from "react";
import styles from "./style.module.css";
import logo from "../../Reilverse_Assets/Logo.png";
import download from "../../Reilverse_Assets/export-file 3.svg";
import {Link, useNavigate} from "react-router-dom";
import {MdOutlinePhoneInTalk} from "react-icons/md";
import {FiSearch} from "react-icons/fi";
import {LuMenu} from "react-icons/lu";
import {IoClose} from "react-icons/io5";
import {Modal} from "antd";
import {FaArrowRight} from "react-icons/fa";
import closeIcon from "../../Reilverse_Assets/closeIcon.svg";
import loginBtnIcon from "../../Reilverse_Assets/loginBtnIcon.svg";
import myAccountImg from "../../Reilverse_Assets/vectorMyAccount.svg";
import myAccountImg2 from "../../Reilverse_Assets/vectorMyAccount2.svg";
import myAccountImg3 from "../../Reilverse_Assets/vectorMyAccount3.svg";
import msg from "../../Reilverse_Assets/msg.svg"
import userIcon from "../../Reilverse_Assets/userIcon.svg"
import arrow from "../../Reilverse_Assets/ArrowDown.svg"
import couple from "../../Reilverse_Assets/loginCouple.svg";
import helpIcon1 from "../../Reilverse_Assets/helpIcon1.svg";
import helpIcon2 from "../../Reilverse_Assets/helpIcon2.svg";
import helpIcon3 from "../../Reilverse_Assets/helpIcon3.svg";
import helpIcon4 from "../../Reilverse_Assets/helpIcon4.svg";
import girl from "../../Reilverse_Assets/image 20.svg";
import {IoIosArrowForward} from "react-icons/io";
import GoogleTranslate from "../GoogleTranslate";

export default function Header() {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);

    const NAV_LINKS = [
        {
            title: "About",
            to: '/uat/about'
        },
        {
            title: "Blogs",
            to: '/uat/contact'
        },
    ]

    const [scrollCount, setScrollCount] = useState(0)

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollCount(position);
    };


    const [unHide, setUnHide] = useState(false)

    const [unHideMsg, setUnHideMsg] = useState(false)

    function unHideHandleMsg() {
        setUnHideMsg(true)
    }

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const showLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const dontShowLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const handleCancel = () => {
        setIsLoginModalOpen(false);
    };

    const [dropdownOpen, setDropdownOpen] = useState(false)

    function dropdownOpenHandler() {
        setDropdownOpen(true)
    }

    function dropdownCloseHandler() {
        setDropdownOpen(false)
    }


    const [dropdownOpen2, setDropdownOpen2] = useState(false)

    function dropdownOpenHandler2() {
        setDropdownOpen2(true)
    }

    function dropdownCloseHandler2() {
        setDropdownOpen2(false)
    }

    const personalLinks = [
        {
            linkName: 'Car',
            routeUrl: '/uat/car_brand',
            classList: 'py-3 px-2 rounded-tl-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]'
        },
        {
            linkName: 'Motorcycle',
            routeUrl: '/uat/motorcycle_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
            description: "Be insured and ready to ride!"
        },
        {
            linkName: 'Personal Cyber',
            routeUrl: '/uat/personal_cyber_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
            description: "The Internet has become an integral part of daily life. Each time you reveal your personal information on the Internet, you are exposed to possible cybercrimes."
        },
        {
            linkName: 'Luxury Watch',
            routeUrl: '/uat/luxury_watch_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
            description: "Your precious watch collection deserves comprehensive protection from vulnerabilities. Wear your luxury watch each & every moment with peace of mind, knowing it’s insured against damage & loss."
        },
        {
            linkName: 'Jewellery',
            routeUrl: '/uat/jewellery_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]'
        },
        {
            linkName: 'Home',
            routeUrl: '/uat/home_insurance',
            classList: 'py-3 px-2 rounded-bl-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]'
        },
        {
            linkName: 'Handbag',
            routeUrl: '/uat/handbag_insurance',
            classList: 'py-3 px-2 rounded-tr-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
            description: "In the world of style, your handbag speaks volumes as a symbol of status and sophistication. Entrust its legacy to our handbag insurance, ensuring your prized possessions are safeguarded against life’s uncertainties. Carry with confidence, knowing your essentials are protected."
        },
        {
            linkName: 'Pet',
            routeUrl: '/uat/pet_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
            description: "Safeguard your most loyal companions because they are family"
        },
        {
            linkName: 'Personal Accident',
            routeUrl: '/uat/personal_accident_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
            description: "Accidents can take a toll on your finances."
        },
        {
            linkName: 'Travel',
            routeUrl: '/uat/travel_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
            description: "Don’t let unexpected events ruin a well deserved vacations."
        },
        {
            linkName: 'Health and Medical',
            routeUrl: '/uat/health_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]',
            description: "When illness strikes, we can take your mind off hospital bills and outpatient fees so that you can concentrate on getting better."
        },
        {
            linkName: 'Life',
            routeUrl: '/uat/life_insurance',
            classList: 'py-3 px-2 rounded-br-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px]'
        },
    ]

    const businessLinks = [
        {
            linkName: 'Architects and Surveyors',
            routeUrl: '/uat/architect_and_surveyors_insurance',
            classList: 'py-3 px-2 rounded-tl-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "We offer tailored policies for architects, planners, and surveyors, whether you’re self-employed or you have your own firm."
        },
        {
            linkName: 'Engineers',
            routeUrl: '/uat/engineer_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description:"Engineering work is deeply rewarding, but also fraught with certain risks. Liability risks are always on the minds of engineers, along with the ever-present risk of injuries.       "
        },
        {
            linkName: 'IT/Technology Services',
            routeUrl: '/uat/Technology_Services_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "A sprawling fast-paced industry like technology requires innovative products that are highly responsive.   Risk management is a critical tool in the technology industry, because the stakes are so high. "
        },
        {
            linkName: 'Consulting',
            routeUrl: '/uat/Consulting_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "Comprehensive consultants insurance to protect you from lawsuits, and much more.Whether you provide management consulting, IT consulting, or any other kind of consulting, you’ll need  insurance to protect your business. For consultants, the most critical protection you need is Professional Indemnity Insurance, so that you’re protected from business lawsuits related to the advice you provide. "
        },
        {
            linkName: 'Retail',
            routeUrl: '/uat/retail_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "Whether you run a physical shop or an online e-commerce store, you’ll need retail insurance to protect your business. "
        },
        {
            linkName: 'Professional Services',
            routeUrl: '/uat/Professional_Services_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "Commercial insurance  starts with property insurance, so that your premises and inventory are well-protected. You’ll also want to cover yourself against staff injuries, public liability, and employee theft. If you ship goods, consider protecting them with shipping insurance."
        },
        {
            linkName: 'Food and Beverage',
            routeUrl: '/uat/food_And_Beverage_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "As consumers become more health, social, and environmentally conscious, food and beverage companies around the world are evolving their business models to meet these needs."
        },
        {
            linkName: 'Interior Design and Renovation',
            routeUrl: '/uat/Interior_Design_And_Renovation_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium'
        },
        {
            linkName: 'Construction',
            routeUrl: '/uat/Construction_insurance',
            description: "Construction is an essential industry for the global economy and activity in the sector is constant. There will always be a need for the renewal of existing and the creation of new infrastructure. But as the build cycle is often driven by socio-economic factors, it can be quite volatile. Construction companies need to have an acute awareness of current and emerging risk issues and be able to respond quickly to changing circumstances.",
            classList: 'py-3 px-2 rounded-bl-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium'
        },
        {
            linkName: 'Logistics',
            routeUrl: '/uat/Logistics_insurance',
            description: "Whether you’re an international freight forwarder, or a home moving company, logistics companies need insurance to protect themselves.",
            classList: 'py-3 px-2 rounded-tr-md hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium'
        },
        {
            linkName: 'Manufacturing and Storage',
            routeUrl: '/uat/Manufacturing_and_Storage_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "The manufacturing landscape has become increasingly globalized as a result of digitization and the adoption of a more customer-centric mindset.We know that the manufacturing industry faces a host of common and emerging risk exposures daily."
        },
        {
            linkName: 'Wellness and Fitness',
            routeUrl: '/uat/Wellness_And_Fitness_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "Whether you run a gym, yoga/pilates studio, martial arts centre, or a sports coaching business, it’s important to have insurance to protect yourself. If you have a physical premises, you’ll need to ensure your capital investment is protected against major risks like fire or vandalism. If you have wellness/fitness employees, they can be prone to injuries, so you’ll to cover them for their medical expenses."
        },
        {
            linkName: 'Healthcare Services',
            routeUrl: '/uat/Health_Care_Services_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "Healthcare organizations are challenged by risk on many fronts."
        },
        {
            linkName: 'Education',
            routeUrl: '/uat/education_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "Education nurtures our future generations of leaders, engineers, scientists and artists. As today’s educational institutions face increasingly complex and diverse challenges, educators insurance programs must adapt to support these institutions. From kindergarten to university, we help education institutions of all levels create customised educators insurance solutions to safeguard your balance sheets, attract and retain your talent, and protect your students."
        },
        {
            linkName: 'Charity',
            routeUrl: '/uat/Charity_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "Management is a key element of governance.We offer tailored policies for non-profit organisations like charities, NGOs, and more."
        },
        {
            linkName: 'Real Estate',
            routeUrl: '/uat/RealState_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "Property owners, operators, managers, and developers need to stay competitive in the dynamic world of real estate."
        },
        {
            linkName: 'Entertainment',
            routeUrl: '/uat/entertainment_insurance',
            classList: 'py-3 px-2 hover:text-[#000] flex font-semibold text-[12px] tracking-[1px] font-medium',
            description: "In an age of changing media consumption habits and options, We can structure  risk management strategies to help entertainment organizations and promotors balance taking bold chances with minimizing and mitigating risk"
        },
    ]

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollCount])

    const handleClick = (item) => {
        window.scrollTo(0, 0);
        navigate(item.routeUrl, {
            state: { description: item.description },
        });
    };

    return <>
        <div className={`${styles.container} `}>
            <div className={styles.wrapper}>
                <div
                    className={'w-full max-[1150px]:px-5 max-[1440px]:px-[80px] max-w-[1400px] min-[1800px]:max-w-[1600px] flex items-center justify-between relative z-10 mt-6'}>
                    <div className={styles.logo_wrapper}>
                        <Link to={'/uat'}>
                            <img className={'w-fit max-w-[300px] h-7 max-[500px]:h-5 max-[1350px]:h-7 object-contain'}
                                 src={logo} alt={"Railverse Logo"}/>
                        </Link>
                    </div>

                    <div className={styles.nav_links}>
                        <div>
                            <Link onMouseEnter={dropdownOpenHandler} onMouseLeave={dropdownCloseHandler}
                                  onClick={() => window.scrollTo(0, 0)} to={'/uat/car_brand'}
                                  className={'pb-2 text-[14px] tracking-[1px] font-semibold flex items-center gap-2 '}>
                                Personal
                                <img className="w-5" src={arrow} alt="arrow-icon"/>
                            </Link>
                            <div className="w-full flex justify-center">
                                <div onMouseEnter={dropdownOpenHandler} onMouseLeave={dropdownCloseHandler}
                                     className={`${dropdownOpen === true ? 'bg-white flex absolute rounded-xl' : 'bg-white hidden absolute rounded-xl'}`}>
                                    <div
                                        className="flex justify-center gap-3 shadow-lg px-14 py-5 backdrop-blur-2xl rounded-xl">
                                        <div>
                                            {personalLinks.slice(0, 6).map((item, index) => {
                                                return (
                                                    <span
                                                        style={{cursor:"pointer"}}
                                                        onClick={()=>handleClick(item)}
                                                        className={item.classList}>
                                                        {item.linkName}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            {personalLinks.slice(6, 12).map((item, index) => {
                                                return (
                                                    <span
                                                        style={{cursor:"pointer"}}
                                                        onClick={() => handleClick(item)}
                                                        className={item.classList}
                                                    >
                                                        {item.linkName}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            <img src={girl} alt="" className="w-[285px]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link onMouseEnter={dropdownOpenHandler2} onMouseLeave={dropdownCloseHandler2}
                                  onClick={() => window.scrollTo(0, 0)} to={'/uat/health_insurance'}
                                  className={'pb-2 font-semibold text-[14px] tracking-[1px] font-medium flex items-center gap-2 '}>
                                business
                                <img className="w-5" src={arrow} alt="arrow-icon"/>
                            </Link>
                            <div className="w-full flex justify-center">
                                <div onMouseEnter={dropdownOpenHandler2} onMouseLeave={dropdownCloseHandler2}
                                     className={`${dropdownOpen2 === true ? 'bg-white flex absolute rounded-2xl' : 'bg-white hidden absolute rounded-2xl'}`}>
                                    <div
                                        className="flex justify-center gap-4 shadow-lg px-14 py-5 backdrop-blur-2xl rounded-2xl">
                                        <div>
                                            {businessLinks.slice(0, 9).map((item, index) => {
                                                return (
                                                    <span
                                                        style={{cursor: "pointer"}}
                                                        onClick={() => handleClick(item)}
                                                        className={item.classList}
                                                    >
                                                        {item.linkName}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            {businessLinks.slice(9, 18).map((item, index) => {
                                                return (
                                                    <span
                                                        style={{cursor: "pointer"}}
                                                        onClick={() => handleClick(item)}
                                                        className={item.classList}
                                                    >
                                                        {item.linkName}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            <img src={girl} alt="" className="w-[350px]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {NAV_LINKS.map((value, index) => <Link onClick={() => window.scrollTo(0, 0)} key={index}
                                                               to={value.to}
                                                               className={'font-semibold text-[14px] pb-2 tracking-[1px] font-medium'}>{value.title}</Link>)}
                        {/* <GoogleTranslate/> */}
                    </div>
                    <div className={'w-auto flex items-center max-[1150px]:hidden gap-5'}>
                        <div onMouseLeave={() => setUnHideMsg(false)}>
                            <img onMouseMove={() => unHideHandleMsg(true)} className="cursor-pointer w-16" src={msg}
                                 alt="msg-icon"/>
                        </div>
                        <div onMouseLeave={() => setUnHide(false)}>
                            <Link onMouseMove={() => setUnHide(true)}
                                  className="flex items-center gap-1 text-[14px] tracking-[1px] font-semibold text-[#13519C] bg-white px-7 py-3 uppercase w-fit rounded-xl"
                                  to={''}>
                                <img className="w-8" src={userIcon} alt="user-icon"/>
                                My account
                            </Link>
                            <span className="text-[#13519C] font-medium text-[12px]">Claim, renew, manage & more</span>
                        </div>
                    </div>

                    {/* <div className={'p-2 rounded-full bg-[#47740E]/20 text-[#47740E] max-[1300px]:ml-4 ml-8  '}>
                            <FiSearch className={'text-2xl'} />
                        </div> */}

                    {/* <div className={'w-auto px-4 py-2 rounded-2xl bg-white shadow flex items-center gap-3 max-[1300px]:ml-4 ml-8 '}>

                            <img className={'h-9 w-9 object-contain'} src={download} alt={'Download'}/>
                            <span className={'text-[14px] font-[500] text-green-700'}>Get Quote</span>

                        </div>

                        <div className={'flex items-center gap-1 ml-2 '}>

                            <div onClick={()=>setLanguages(0)} className={` ${languages===0?`bg-blue-500 text-white`:`bg-white`} duration-200 w-8 h-8 rounded-full flex justify-center items-center text-[12px]  cursor-pointer pt-1 `}>EN</div>
                            <div onClick={()=>setLanguages(1)} className={` ${languages===1?`bg-blue-500 text-white`:`bg-white`} duration-200 w-8 h-8 rounded-full flex justify-center items-center text-[12px] cursor-pointer pt-1`}>IND</div>

                        </div> */}

                    {/* Mobile Nav */}
                    <div className={'flex items-center min-[1150px]:hidden gap-8'}>
                        <div className={'p-2 rounded-full bg-[#13519C86]/80 max-[500px]:hidden  '}>
                            <FiSearch className={'text-3xl'}/>
                        </div>

                        <div onClick={() => setOpen(!isOpen)}
                             className={'text-4xl text-[#13519c] max-[500px]:translate-y-1 '}>
                            {!isOpen ? <LuMenu/> : <IoClose/>}
                        </div>
                    </div>

                    <div
                        className={` ${isOpen ? `top-[-24px]` : `top-[-250vh]`} min-[1150px]:hidden pt-28 px-10 w-full h-screen bg-white absolute left-0 duration-700 ease-in-out -z-10 flex flex-col items-end max-[500px]:items-start `}>

                        <div className={'p-2 min-[500px]:hidden self-start rounded-full bg-white mb-3  '}>
                            <FiSearch className={'text-3xl'}/>
                        </div>

                        <div className={styles.nav_links_mob}>
                            <span
                                className={'cursor-pointer text-[16px] flex items-center gap-2 relative min-[600px]:hidden text-gray-700 font-semibold'}>Contact Us <FaArrowRight
                                className="text-indigo-700"/></span>
                            <span
                                className={'text-[16px] flex items-center gap-2 min-[600px]:hidden text-gray-700 font-semibold'}>Login <FaArrowRight
                                className="text-indigo-700"/></span>
                            <span
                                className={'text-[16px] min-[600px]:hidden flex items-center gap-2 text-gray-700 font-semibold'}>About us <FaArrowRight
                                className="text-indigo-700"/></span>
                            <Link onClick={() => window.scrollTo(0, 0)} to={''}
                                  className={'text-[16px] tracking-[1px] flex items-center gap-2 text-gray-700 font-semibold'}>
                                Products <FaArrowRight className="text-indigo-700"/>
                            </Link>
                            {NAV_LINKS.map((value, index) => <Link key={index} to={value.to}
                                                                   className={'flex text-[16px] items-center tracking-[1px] font-semibold gap-1 text-gray-700'}>{value.title}
                                <FaArrowRight className="text-indigo-700"/></Link>)}
                        </div>

                        <div className={'w-auto flex max-[500px]:flex-col  max-[500px]:gap-4 items-center '}>

                            <div
                                className={'w-auto h-16 rounded-xl border-2 border-green-950 flex items-center px-4 py-0'}>
                                <MdOutlinePhoneInTalk className={'text-3xl'}/>
                                <div className={'flex flex-col items-end leading-4 '}>
                                    <span className={'text-[14px] font-semibold'}>+91 11 4678 1000</span>
                                    <span className={'font-bold text-[7px]'}>24 Hours</span>
                                </div>
                            </div>

                            <div
                                className={'w-auto px-4 py-2 rounded-2xl bg-white shadow flex items-center gap-3 min-[500px]:ml-8 '}>

                                <img className={'h-9 w-9 object-contain'} src={download} alt={'Download'}/>
                                <span className={'text-[14px] font-semibold text-[#13519C]'}>Get Quote</span>

                            </div>

                        </div>

                    </div>
                    {/* Mobile Nav */}

                </div>

            </div>
            <div
                className={`${unHide === true ? 'w-11/12 flex justify-end ease-in duration-300' : 'w-11/12 hidden justify-end ease-in duration-300'}`}>
                <div
                    onMouseMove={() => setUnHide(true)} onMouseLeave={() => setUnHide(false)}
                    className="bg-white flex gap-2 pr-8 py-8 w-[40%] rounded-xl">
                    <div className="w-[30%] flex items-center overflow-hidden">
                        <img className="scale-125 w-[300px] ml-[-20%]" src={myAccountImg} alt=""/>
                    </div>
                    <div className="w-[35%]">
                        <img className="w-full" src={myAccountImg2} alt=""/>
                        <div className="flex items-start justify-start flex-col">
                            <p className="text-[#13519C] text-[16px] font-semibold mt-1">Customer Login</p>
                            <p className="text-left text-[13px] text-[#000] font-medium mt-1 mb-4">Manage, Update
                                policies through your dedicated Self Services Portal</p>
                        </div>
                        <div className={'overflow-hidden cursor-pointer z-0 w-28 h-7 flex pl-7 max-[630px]:text-start items-center rounded-md text-white font-semibold bg-[#13519C] bg-gradient-to-tl from-[##13519C] to-[#13519C86] relative'}>
                            <span className={'font-[400] text-[14px]'}>LOGIN</span>
                            <IoIosArrowForward className={'text-[50px] absolute right-0 opacity-40'}/>
                        </div>
                    </div>
                    <div className="w-[35%]">
                        <img className="w-full" src={myAccountImg3} alt=""/>
                        <div className="flex items-start justify-start flex-col">
                            <p className="text-[#13519C] text-[16px] font-semibold mt-1">Agent Login</p>
                            <p className="text-left text-[13px] text-[#000] font-medium mt-1 mb-4">Manage, Update
                                policies through your dedicated Self Services Portal</p>
                        </div>
                        <div onClick={showLoginModal}
                             className={'overflow-hidden cursor-pointer z-0 w-28 h-7 flex pl-7 max-[630px]:text-start items-center rounded-md text-white font-semibold bg-[#13519C] bg-gradient-to-tl from-[##13519C] to-[#13519C86] relative'}>
                            <span className={'font-[400] text-[14px]'}>LOGIN</span>
                            <IoIosArrowForward className={'text-[50px] absolute right-0 opacity-40'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${unHideMsg === true ? 'w-8/12 flex justify-end ease-in duration-300' : 'w-8/12 hidden justify-end ease-in duration-300'}`}>
                <div
                    onMouseEnter={() => setUnHideMsg(true)} onMouseLeave={() => setUnHideMsg(false)}
                    className="bg-white gap-2 p-4 w-[45%] rounded-xl">
                    <div className="text-left w-full">
                        <p className="text-[#000] text-[14px] font-semibold">How can we help you?</p>
                        <p className="text-[#000] text-[12px] font-medium mt-1">Contact our support team now!</p>
                        <hr className="w-[90%] mt-3"/>
                    </div>
                    <div className="w-[85%] mt-3 flex justify-between">
                        <div className="flex items-center gap-1 justify-start">
                            <div className="">
                                <img className="w-[30px]" src={helpIcon1} alt="helpIcon1"/>
                            </div>
                            <div className="text-left">
                                <p className="text-[#000] text-[10px]">Call Center</p>
                                <p className="text-[#13519C] text-[12px] font-semibold">+65 6287 7537</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 justify-start">
                            <div className="">
                                <img className="w-[30px]" src={helpIcon2} alt="helpIcon2"/>
                            </div>
                            <div className="text-left">
                                <p className="text-[#000] text-[10px]">EMail</p>
                                <p className="text-[#13519C] text-[12px] font-semibold">support@rielverse.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[83.5%] mt-7 flex justify-between">
                        <div className="flex items-center gap-1 justify-start">
                            <div className="">
                                <img className="w-[30px]" src={helpIcon4} alt="helpIcon4"/>
                            </div>
                            <div className="text-left">
                                <p className="text-[#000] text-[10px]">Open a support ticket</p>
                                <p className="text-[#13519C] text-[12px] font-semibold">Submit a request</p>
                                <p className="text-[#000] text-[10px]">Anytime 24/7</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 justify-start">
                            <div className="">
                                <img className="w-[30px]" src={helpIcon3} alt="helpIcon3"/>
                            </div>
                            <div className="text-left">
                                <p className="text-[#000] text-[10px]">Whatsapp</p>
                                <p className="text-[#13519C] text-[12px] font-semibold">9999 19999</p>
                                <p className="text-[#000] text-[10px]">This is a chat only number</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Login Modal */}
        <Modal title="" open={isLoginModalOpen} onCancel={handleCancel} className={styles.loginModal}
               cancelButtonProps={{style: {display: 'none'}}}
               okButtonProps={{style: {display: 'none'}}}
               closable={false}
        >
            <div className="flex justify-end">
                <img onClick={dontShowLoginModal} src={closeIcon} alt="" className="cursor-pointer w-[22px]"/>
            </div>
            <div className="flex flex-col items-center justify-start">
                {/* <button onClick={handleCancel}>close</button> */}
                <p className="text-[#13519C] text-[22px] font-medium">Login with Email</p>
                <input type="text" placeholder="Mail ID"
                       className="w-10/12 h-[50px] rounded-xl mt-5 px-5 outline-0 border border-[#13519C] placeholder:text-[#777777]"/>
                <button
                    className="flex gap-8 justify-center items-center bg-[#2983D399] text-white text-[14px] font-semibold w-[175px] h-[40px] mt-5 rounded-xl">
                    Send OTP <img src={loginBtnIcon} alt="loginBtnIcon"/>
                </button>
                <p className="text-[16px] text-[#00000] font-medium mt-5">By continuing, I agree to <span
                    className="text-[#13519C]">Terms & Conditions</span></p>
                <div className="w-full flex justify-end">
                    <img src={couple} alt="couple" className="w-5/12 mt-4"/>
                </div>
            </div>
        </Modal>
    </>
}
