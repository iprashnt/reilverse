import { useState } from "react";
import style from "./style.module.css";

// IMAGES
import background from "../../assets/background2.png";
import marutiAlto800 from "../../assets/marutiAlto800.svg";
import editIcons from "../../assets/editIcon.svg";
import DropdownArrow from "../../Reilverse_Assets/ArrowDown.svg";
import forteGeneralInsurance from "../../Reilverse_Assets/forteGeneralInsurance.svg";
import dashLineLeft from "../../Reilverse_Assets/dashLineLeft.svg";
import dashLineRight from "../../Reilverse_Assets/dashLineRight.svg";
import rightArrow from "../../Reilverse_Assets/rightArrow.svg";
import shildImg from "../../Reilverse_Assets/secure.svg";
import secureUserImg from "../../Reilverse_Assets/secure_user.svg";
import btnRightArrow from "../../Reilverse_Assets/btnRightArrow.svg";
import infoImg from "../../Reilverse_Assets/Info.svg";
import phoneBlue from "../../Reilverse_Assets/phoneBlue.svg";
import smNavLeftArrow from "../../Reilverse_Assets/smNavLeftArrow.svg";
import rightArrowBlue from "../../Reilverse_Assets/rightArrowBlue.svg";

export default function Quote() {
    // STATES
    const [modal, setModal] = useState(false);

    // FUNCTIONS
    const viewBenifitAndBreakupHandler = () => {
        setModal((prev) => !prev);
    };

    return (
        <>
            {/* LARGE SCREEN VIEW */}
            <div className="xl:block lg:block md:block hidden w-full relative">
                <img data-aos="zoom-in" className={"object-contain w-full absolute -right-0 -z-30"} src={background} />
                <div className={`${style.container}`}>
                    <div className={`${style.content_wrapper}`}>
                        {/* MAIN SECTION */}
                        <div className="h-[100rem]">
                            {/* TOP SECTION */}
                            <div className="flex gap-3">
                                <img src={marutiAlto800} className="self-start" />
                                <div className="flex flex-col justify-start items-start mt-2">
                                    <span className={"font-[400] xl:text-[1.6rem] lg:text-[1.6rem] text-[#102770]"}>Maruti Alto 800</span>
                                    <div className="flex items-center gap-3">
                                        <span className={"font-[400] xl:text-[0.8rem] lg:text-[0.8rem]"}>Active Policy Start Date : 07 Feb 2025</span>
                                        <img src={editIcons} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mt-[1.9rem]">
                                <div className="flex flex-col justify-start items-start w-fit mr-[2.4rem]">
                                    <span className="ml-3 font-[400] mb-[0.3rem] xl:text-[0.7rem] lg:text-[0.7rem]">
                                        In Last 3 Years AnyLosses Or Claim
                                    </span>
                                    <div className="flex justify-start items-center bg-white w-[21.5rem] h-[2.8rem] rounded-[0.3rem] py-[0.6rem] px-[1.3rem]">
                                        <div className="flex justify-center items-center">
                                            <span className="font-[400] xl:text-[0.7rem] lg:text-[0.7rem] mr-[1rem]">NCB</span>
                                            <div className="flex justify-center items-center w-fit px-2 py-1 bg-[#1A45D61A] rounded-[0.3rem]">
                                                <span className="font-[400] text-[#13519C] xl:text-[0.7rem] lg:text-[0.7rem] mr-[0.3rem]">20%</span>
                                                <img src={DropdownArrow} className="w-[1rem] h-[1rem]" />
                                            </div>
                                        </div>
                                        <div className="h-full border-l-2 border-[#1A45D680] ml-[2.4rem] mr-[1.1rem]"></div>
                                        <div className="flex justify-center items-center">
                                            <span className="font-[400] xl:text-[0.7rem] lg:text-[0.7rem] mr-[1.1rem]">Claim</span>
                                            <div className="flex justify-center items-center w-fit px-2 py-1 bg-[#1A45D61A] rounded-[0.3rem]">
                                                <span className="font-[400] text-[#13519C] xl:text-[0.7rem] lg:text-[0.7rem] mr-[0.7rem]">No</span>
                                                <img src={DropdownArrow} className="w-[1rem] h-[1rem]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-start w-fit mr-[3rem]">
                                    <span className="ml-2 font-[400] mb-[0.3rem] xl:text-[0.7rem] lg:text-[0.7rem]">Plan Type</span>
                                    <div className="flex justify-start items-center bg-white w-[14.3rem] h-[2.8rem] rounded-[0.3rem] py-[0.4rem] px-[0.7rem]">
                                        <div className="flex w-full justify-between items-center">
                                            <span className="font-[400] text-[#1A45D6] xl:text-[1.1rem] lg:text-[1.1rem] ml-3">Third Party</span>
                                            <img src={DropdownArrow} className="w-[1.5rem] h-[1.5rem]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-start w-fit mr-[2rem]">
                                    <span className="font-[400] mb-[0.3rem] xl:text-[0.7rem] lg:text-[0.7rem]">Sum Insured</span>
                                    <div className="w-full flex justify-between items-end">
                                        <span className="font-[500] mb-[0.2rem] xl:text-xs lg:text-xs text-[#1A45D6]">$10000 USD</span>
                                        <span className="font-[500] mb-[0.2rem] xl:text-xs lg:text-xs text-[#1A45D6]">$75000 USD</span>
                                    </div>
                                    <div className="w-[12.8rem] px-2 flex justify-center items-center">
                                        <div className="rounded-full w-[0.9rem] h-[0.9rem] border-4 border-[#1A45D6] bg-white"></div>
                                        <div className="bg-[#1A45D640] w-full h-1"></div>
                                        <div className="rounded-full w-[0.9rem] h-[0.9rem] border-4 border-[#1A45D6] bg-white"></div>
                                    </div>
                                    <div className="w-full px-[0.1rem] pt-[0.1rem] rounded-tl-md rounded-tr-md bg-gradient-to-t from-transparent to-[#13519C] mt-3">
                                        <div className="py-2 px-3 w-full flex justify-start items-center rounded-tl-md rounded-tr-md bg-[#EAF1FA]">
                                            <span className="font-[500] text-[#1A45D6] text-sm">$75000 USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-start w-fit">
                                    <span className="ml-2 font-[400] mb-[0.3rem] xl:text-[0.7rem] lg:text-[0.7rem]">Engine Size</span>
                                    <div className="flex justify-start items-center bg-white w-[8.8rem] h-[2.8rem] rounded-[0.3rem] px-[1.2rem]">
                                        <div className="flex w-full justify-between items-center">
                                            <span className="font-[500] text-[#102770] xl:text-[0.8rem] lg:text-[0.8rem]">3000</span>
                                            <img src={DropdownArrow} className="w-[1.5rem] h-[1.5rem]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END TOP SECTION */}

                            {/* SECOD SETION GRID*/}
                            <div className="mt-[1.6rem] w-full h-auto grid grid-cols-[70%_25%] gap-x-[2.4rem]">
                                {/* GRID LEFT SIDE */}
                                <div className="w-full h-[21.125rem] bg-gradient-to-t from-transparent to-[#13519C] px-[0.1rem] py-[0.1rem] rounded-tl-[0.9rem] rounded-tr-[0.9rem]">
                                    <div className="flex w-full h-full bg-white rounded-tl-[0.9rem] rounded-tr-[0.9rem] py-[2.2rem] px-[2rem]">
                                        <div className="flex justify-between w-full h-[7.8rem] px-[2.4rem] rounded-[0.6rem] border-2 border-[#13519C]">
                                            {/* INSIDE #1 */}
                                            <div className="w-[11rem] px-[0.1rem] py-[0.1rem] h-[4.8rem] bg-gradient-to-b from-transparent to-[#1A45D6] rounded-bl-[0.9rem] rounded-br-[0.9rem]">
                                                <div className="w-full h-full flex justify-center items-end rounded-bl-[0.9rem] rounded-br-[0.9rem] bg-white">
                                                    <img src={forteGeneralInsurance} />
                                                </div>
                                            </div>

                                            {/* INSIDE #2 */}
                                            <div className="h-full flex justify-center items-center">
                                                <img src={dashLineLeft} />
                                                <button className="ml-3 mr-2 bg-white border-2 border-[#1A45D6] rounded-[0.3rem] font-[#1A45D6] text-sm text-[#1A45D6] px-[1.3rem] py-[0.2rem]">
                                                    More Details
                                                </button>
                                                <img src={dashLineRight} />
                                            </div>

                                            {/* INSIDE #3 */}
                                            <div className="h-full flex flex-col justify-between items-center py-[1.7rem]">
                                                <div className="cursor-pointer w-full rounded-[0.3rem] flex justify-center items-center bg-[#1A45D6] py-1.5 px-[1rem]">
                                                    <span className="mr-[0.8rem] font-[400] text-white text-normal">
                                                        $290<span className="text-[0.6rem] font-[200] text-white">USD</span>
                                                    </span>
                                                    <img src={rightArrow} className="w-[1rem] h-[1rem]" />
                                                </div>
                                                <span
                                                    onClick={viewBenifitAndBreakupHandler}
                                                    className="cursor-pointer text-[#1A45D6] font-[400] text-sm mt-[1.3rem]"
                                                >
                                                    View Benefits & Breakup
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* GRID RIGHT SIDE */}
                                <div className="w-full h-[21.125rem] px-[0.1rem] py-[0.1rem] bg-gradient-to-t from-transparent to-[#13519C] rounded-tl-[0.9rem] rounded-tr-[0.9rem]">
                                    <div className="flex justify-start bg-white py-3 px-4 w-full h-full rounded-tl-[0.9rem] rounded-tr-[0.9rem]">
                                        <span className="text-[#13519C] font-[400] text-[1.1rem]">Why Rielverse?</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FOOTER SECTION */}
                        <div className="w-full flex flex-col items-end mb-[2.5rem]">
                            <div className="w-fit px-[0.2rem] bg-[#F4F4F4] bg-opacity-90 py-[0.2rem] rounded-lg">
                                <div className="flex gap-8 justify-center items-center bg-white w-full h-full rounded-lg py-[0.5rem] px-[1rem]">
                                    {/* #1 */}
                                    <div className="flex">
                                        <img src={shildImg} className="mr-[0.43rem]" />
                                        <div className="flex flex-col">
                                            <span className="text-[#13519C] font-[400] text-sm">Secured &</span>
                                            <span className="font-[400] text-sm">Encrypted</span>
                                        </div>
                                    </div>

                                    {/* #2 */}
                                    <div className="flex">
                                        <img src={secureUserImg} className="mr-[0.43rem]" />
                                        <div className="flex flex-col">
                                            <span className="text-[#13519C] font-[400] text-sm">35000+</span>
                                            <span className="font-[400] text-sm">Trust us</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start mt-2">
                                <span className="text-[0.8rem] font-[400] text-[#666666]">
                                    Copyright 2024 Rielverse All Rights Reserved. | Privacy Policy
                                </span>
                                <span className="text-[0.8rem] font-[400]">
                                    <span className="text-[#666666]">Designed By</span>{" "}
                                    <span className="text-[#13519C]">Konax Technologies Pvt Ltd</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {modal && (
                    <div
                        onClick={viewBenifitAndBreakupHandler}
                        className="xl:flex lg:flex md:flex hidden absolute top-0 left-0 bg-[#A9CDED] z-10 bg-opacity-60 w-full h-full justify-center items-center"
                    >
                        <div className="absolute bg-white z-10 top-[11rem] w-[41rem] h-[51.1rem] rounded-xl">
                            {/* #1 */}
                            <div className="mt-[1.8rem] mb-[2.3rem] flex justify-between">
                                <div className="w-[14rem] h-[4.6rem] rounded-lg bg-gradient-to-r from-transparent to-[#1A45D6] px-[0.1rem] py-[0.1rem]">
                                    <div className="flex justify-center items-center rounded-lg w-full h-full bg-white">
                                        <img src={forteGeneralInsurance} className="w-[10rem] h-[3.5rem]" />
                                    </div>
                                </div>
                                <div className="w-[10rem] flex flex-col mr-[4.2rem]">
                                    <div className="w-full flex flex-col items-start">
                                        <span className="text-[#13519C] font-[400] text-xs ml-4">Pay Now</span>
                                        <div className="w-full h-[2.5rem] bg-[#1A45D6] rounded-xl flex justify-between items-center">
                                            <span className="ml-[1.5rem] text-white font-[400] text-lg mr-[2.5rem]">$300</span>
                                            <img src={btnRightArrow} className="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />
                                        </div>
                                    </div>
                                    <span className="text-center font-[400] text-[#8F8F8F] text-xs mt-1">Premium Inclusive of Taxes</span>
                                </div>
                            </div>

                            {/* #2 */}
                            <div className="rounded-xl bg-[#F5F5F6] flex flex-col justify-start w-full h-full py-[1.75rem] px-[3.3rem]">
                                <div className="flex gap-[1.8rem] mb-[0.9rem]">
                                    <button className="w-[6.8rem] h-[1.8rem] bg-[#2553E426] rounded-md text-[#13519C] text-xs font-medium">
                                        Basic Details
                                    </button>
                                    <button className="flex justify-center items-center gap-[0.3rem] w-[6.8rem] h-[1.8rem] bg-[#E6E6E6] rounded-md text-[#707070] text-xs font-medium">
                                        Policy details <img src={infoImg} className="w-[0.6rem] h-[0.6rem] mt-[0.1rem]" />
                                    </button>
                                </div>

                                <div className="flex flex-col justify-between w-full h-full bg-white rounded-xl py-[1.2rem] px-[1.3rem]">
                                    <div className="flex flex-col justify-start">
                                        <span className="font-[400] text-[1.1rem] text-start mb-5">Premium Breakup</span>
                                        <div className="w-[90%] flex flex-col gap-4">
                                            <div className="flex justify-between items-center">
                                                <span className="font-[400] text-sm w-[75%] text-start truncate">Third Party</span>
                                                <span className="font-[400] text-sm w-[15%] text-start truncate">12,100.00៛</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-[400] text-sm w-[75%] text-start truncate">Admin Fee</span>
                                                <span className="font-[400] text-sm w-[15%] text-start truncate">65.00៛</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full flex flex-col justify-start">
                                        <div className="w-full border-t-2 border-[#D9D9D9] mb-[0.5rem]"></div>
                                        <span className="text-lx font-medium text-start mb-4">Premium Details</span>
                                        <div className="w-[90%] flex flex-col gap-1">
                                            <div className="flex justify-between items-center">
                                                <span className="font-[400] text-sm w-[75%] text-start truncate">Total Premium</span>
                                                <span className="font-[400] text-sm w-[15%] text-start truncate">+49755.90៛</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-[400] text-sm w-[75%] text-start truncate">Admin Fee</span>
                                                <span className="font-[400] text-sm w-[15%] text-start truncate">+1</span>
                                            </div>
                                        </div>
                                        <div className="w-full border-t-2 border-[#D9D9D9] mt-[0.5rem] mb-[0.5rem]"></div>
                                        <div className="w-[90%] flex justify-between items-center">
                                            <span className="text-lx font-medium text-start mb-4 w-[75%]">Total Payable</span>
                                            <span className="text-lx font-medium text-start mb-4 w-[15%]">52,243.80៛</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <span className="font-[400] text-lg">Need Assistance ?</span>
                                    <div className="flex justify-center items-center mt-1">
                                        <img src={phoneBlue} className="mr-2" />
                                        <span className="text-[#13519C] text-sm font-[400]">Request a Call Back</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* END LARGE SCREEN VIEW */}

            {/* MOBILE VIEW */}
            <div className="w-full xl:hidden lg:hidden md:hidden block h-screen relative">
                <div className={`${style.container}`}>
                    <div className={`${style.content_wrapper}`}>
                        {/* #1 */}
                        <div className="pl-[1rem] flex bg-white">
                            <div className="h-full flex justify-center items-start mt-1.5 mr-[0.9rem]">
                                <img src={smNavLeftArrow} />
                            </div>
                            <div className="h-full flex flex-col justify-start items-start">
                                <span className={"font-[400] text-lg"}>Maruti Alto 800</span>
                                <div className="flex items-center gap-3">
                                    <span className={"font-[400] text-sm"}>
                                        Active Policy Start Date : <span className="font-medium text-sm">07 Feb 2025</span>
                                    </span>
                                    <img src={editIcons} className="w-[0.8rem] h-[0.8rem]" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-t-2 border-[#E1E1E1] w-full mt-[1.1rem] mb-[1.1rem]"></div>

                        {/* #2 */}
                        <div className="px-2 bg-white shadow-2xl w-full h-full flex justify-between items-start pb-[1.2rem]">
                            <div className="flex flex-col justify-start items-start">
                                <span className="ml-2 mb-[0.2rem] text-start text-[#13519C] uppercase text-xs">Sum Insured</span>
                                <div className="rounded-xl w-fit py-[0.5rem] px-[0.8rem] flex justify-between items-center border-2 border-[#D0D0D0] ">
                                    <span className="font-normal text-xs mr-1 truncate">$75000 USD</span>
                                    <img src={DropdownArrow} />
                                </div>
                            </div>

                            <div className="flex flex-col justify-start items-start">
                                <span className="ml-2 mb-[0.2rem] text-start text-[#13519C] uppercase text-xs">Engine Size</span>
                                <div className="rounded-xl w-fit py-[0.5rem] px-[0.8rem] flex justify-between items-center border-2 border-[#D0D0D0] ">
                                    <span className="font-normal text-xs mr-1 truncate">3000</span>
                                    <img src={DropdownArrow} />
                                </div>
                            </div>

                            <div className="flex flex-col justify-start items-start">
                                <span className="ml-2 mb-[0.2rem] text-start text-[#13519C] uppercase text-xs">Claim</span>
                                <div className="rounded-xl w-fit py-[0.5rem] px-[0.8rem] flex justify-between items-center border-2 border-[#D0D0D0] ">
                                    <span className="font-normal text-xs mr-1 truncate">No</span>
                                    <img src={DropdownArrow} />
                                </div>
                            </div>

                            <div className="flex flex-col justify-start items-start">
                                <span className="ml-2 mb-[0.2rem] text-start text-[#13519C] uppercase text-xs">plan type</span>
                                <div className="rounded-xl w-fit py-[0.5rem] px-[0.8rem] flex justify-between items-center border-2 border-[#D0D0D0] ">
                                    <span className="font-normal text-xs mr-1 truncate">Third Party Li...</span>
                                    <img src={DropdownArrow} />
                                </div>
                            </div>
                        </div>

                        {/* #3 */}
                        <div className="flex flex-col justify-start items-start w-full h-full bg-[#F5F5F5] py-[1rem] px-[0.9rem]">
                            <span className="mb-[0.6rem] font-medium text-lg text-[#404040]">1 Insurance plan found</span>
                            <div className="w-full h-full bg-white rounded-[0.9rem] px-[1.1rem] py-[1.1rem]">
                                <div className="flex justify-between items-center mb-[0.8rem]">
                                    <img src={forteGeneralInsurance} />
                                    <div className="cursor-pointer w-[7rem] h-[1.8rem] rounded-[0.3rem] flex justify-center items-center bg-[#1A45D6]">
                                        <span className="mr-[0.8rem] font-[400] text-white text-xs">
                                            $290<span className="text-[0.6rem] font-[200] text-white">USD</span>
                                        </span>
                                        <img src={rightArrow} className="w-[1rem] h-[1rem]" />
                                    </div>
                                </div>

                                <div className="flex justify-betweent">
                                    <div className="w-full flex flex-col justify-start items-start">
                                        <span className="font-normal text-xs uppercase truncate">Sum Insured</span>
                                        <span className="font-[400] text-xs text-[#1A45D6] truncate">$74000</span>
                                        <span className="font-normal text-xs uppercase mt-[0.2rem] truncate">Plan type</span>
                                        <span className="font-[400] text-xs text-[#1A45D6] mt-[0.3rem] truncate">Third Party Liability Only</span>
                                    </div>
                                    <div className="w-full flex flex-col justify-start items-end">
                                        <span className="font-[400] text-xs text-[#7D7C7C] truncate">
                                            Policy Start Date : <span className="font-medium text-[#7D7C7C] truncate">07 Feb 2025</span>
                                        </span>
                                        <span
                                            onClick={viewBenifitAndBreakupHandler}
                                            className="font-[400] text-xs text-[#187DF1] mt-[0.6rem] truncate"
                                        >
                                            View Benefits & Breakup
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE VIEW MODAL */}
                {modal && (
                    <div className="w-full h-screen absolute bg-[#DDE3F9] bg-opacity-70 top-0 left-0 z-10">
                        <div className="w-full bg-white z-10 absolute bottom-0 h-auto rounded-tl-3xl rounded-tr-3xl">
                            {/* HEADING */}
                            <div className="flex justify-start items-center py-[1.6rem] px-[1.5rem]">
                                <span className="font-medium">Filters</span>
                            </div>
                            <div className="border-[#E4E4E4] border-t-2 w-full"></div>

                            {/* GRID */}
                            <div className="w-full grid grid-cols-[25%_75%]">
                                <div className="w-full flex flex-col py-[1.1rem] bg-[#F5F5F5]">
                                    <div className="h-[3.5rem] flex justify-start items-center">
                                        <span className="ml-[1rem] text-[#6E6E76] font-medium text-[0.6rem] uppercase">Sum Insured</span>
                                    </div>
                                    <div className="border-l-[0.188rem] border-[#007FFF] h-[3.5rem] flex justify-start items-center">
                                        <span className="ml-[1rem]  text-[#007FFF] font-medium text-[0.6rem] uppercase">plan type</span>
                                    </div>
                                    <div className="h-[3.5rem] flex justify-start items-center">
                                        <span className="ml-[1rem]  text-[#6E6E76] font-medium text-[0.6rem] uppercase">Engine Size</span>
                                    </div>
                                    <div className="h-[3.5rem] flex justify-start items-center">
                                        <span className="ml-[1rem]  text-[#6E6E76] font-medium text-[0.6rem] uppercase">Claim</span>
                                    </div>
                                </div>
                                <div className="w-full px-[1.1rem]">
                                    <div className="mt-[1.1rem] mb-[1.1rem] flex justify-start items-center">
                                        <div className="w-[1rem]">
                                            <div className="cursor-pointer w-[1rem] h-[1rem] rounded-full border-[0.2rem] border-[#ECEBEB] bg-[#007FFF] mr-[0.8rem]"></div>
                                        </div>
                                        <span className="ml-[0.8rem] text-start text-[#007FFF] font-medium text-xs">Third Party Liability Only</span>
                                    </div>

                                    <div className="w-full border-t-2 border-[#EDEDED]"></div>

                                    <div className="mt-[1.1rem] mb-[1.1rem] flex justify-start items-center">
                                        <div className="w-[1rem]">
                                            <div className="cursor-pointer w-[1rem] h-[1rem] rounded-full border-[0.2rem] border-[#ECEBEB] bg-[#ECEBEB] mr-[0.8rem]"></div>
                                        </div>
                                        <span className="ml-[0.8rem] text-start text-[#A1A1A1] font-extralight text-xs">
                                            Coverage Comprehensive: Third Party Liability + Own Damage + Theft/Total Loss
                                        </span>
                                    </div>

                                    <div className="w-full border-t-2 border-[#EDEDED]"></div>

                                    <div className="mt-[1.1rem] mb-[1.1rem] flex justify-start items-center">
                                        <div className="w-[1rem]">
                                            <div className="cursor-pointer w-[1rem] h-[1rem] rounded-full border-[0.2rem] border-[#ECEBEB] bg-[#ECEBEB] mr-[0.8rem]"></div>
                                        </div>
                                        <span className="ml-[0.8rem] text-start text-[#A1A1A1] font-extralight text-xs">
                                            Third Party Liability + Accident to Authorized Driver(AD) + Passenger Liability(PL)
                                        </span>
                                    </div>

                                    <div className="w-full border-t-2 border-[#EDEDED]"></div>

                                    <div className="mt-[1.1rem] mb-[1.1rem] flex justify-start items-center">
                                        <div className="w-[1rem]">
                                            <div className="cursor-pointer w-[1rem] h-[1rem] rounded-full border-[0.2rem] border-[#ECEBEB] bg-[#ECEBEB] mr-[0.8rem]"></div>
                                        </div>
                                        <span className="ml-[0.8rem] text-start text-[#A1A1A1] font-extralight text-xs">
                                            Coverage Comprehensive: Third Party Liability + Own Damage + Theft/Total Loss + Accident to Authorized
                                            Driver(AD) + Passenger Liability(PL)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-around w-full mt-[1.5rem] mb-[1.5rem]">
                                <div
                                    onClick={viewBenifitAndBreakupHandler}
                                    className="z-10 cursor-pointer w-[9.3rem] h-[2.4rem] rounded-md border-2 border-[#1A45D6] flex justify-center items-center"
                                >
                                    <span className="uppercase text-xs font-medium text-[#1A45D6]">reset filters</span>
                                    <img src={rightArrowBlue} className="ml-[0.3rem]" />
                                </div>

                                <div
                                    onClick={viewBenifitAndBreakupHandler}
                                    className="z-10 cursor-pointer w-[9.3rem] h-[2.4rem] rounded-md bg-[#1A45D6] flex justify-center items-center"
                                >
                                    <span className="uppercase text-xs font-medium text-white">Apply</span>
                                    <img src={rightArrow} className="ml-[0.75rem]" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* END MOBILE VIEW */}
        </>
    );
}
