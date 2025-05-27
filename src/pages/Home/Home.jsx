import React from "react";
import style from "./style.module.css";
import First_section from "../../sections/first_section/First_section";
import Second_section from "../../sections/second_section/Second_section";

import green_layer from "../../Reilverse_Assets/logo 1.svg";
import { IoIosArrowForward, IoLogoInstagram } from "react-icons/io";
import logo from "../../Reilverse_Assets/Logo.png";
import offer from "../../Reilverse_Assets/Offers.svg";
import secure from "../../Reilverse_Assets/secure.svg";
import secure_user from "../../Reilverse_Assets/secure_user.svg";
import comodo from "../../Reilverse_Assets/image 63345987.svg";
import mcaffe from "../../Reilverse_Assets/image 63345988.png";
import support_guy from "../../Reilverse_Assets/customer_service.svg";

export default function Home() {
    return (
        <>
            <div
                className={style.container}
                style={{
                    backgroundImage: `url(${green_layer})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div className={style.content_wrapper}>
                    {/* First Layer */}
                    <First_section />

                    {/* Second Section */}
                    <Second_section />

                    <div className={"w-full max-[800px]:px-2 max-[1440px]:px-6 flex flex-col items-center mt-20"}>
                        <div
                            data-aos="zoom-out-up"
                            className={
                                "w-full max-[630px]:w-full max-[630px]:h-28 max-[850px]:w-[600px] max-[850px]:h-44 max-[1200px]:w-[800px] max-[1200px]:h-60 min-[1880px]:max-w-[1400px] max-w-[1190px] h-80 rounded-2xl flex flex-col items-end justify-center max-[630px]:px-4 max-[850px]:px-16 px-28 relative"
                            }
                        >
                            <img className={"w-full h-full object-fill absolute rounded-[15px] top-0 left-0 -z-0"} src={green_layer} />
                            <div
                                className={
                                    "overflow-hidden z-0 w-80 h-20 max-[630px]:w-28 max-[630px]:h-12 max-[850px]:w-44 max-[850px]:h-14 max-[1200px]:w-52 max-[1200px]:h-16 flex pl-7 max-[630px]:text-start items-center rounded-2xl max-[630px]:text-[16px] max-[850px]:text-xl text-[24px] text-white font-semibold  relative"
                                }
                                style={{
                                    backgroundImage: `url(${offer})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <span className={"font-[400] text-[#102770] max-[630px]:-translate-x-3"}>Get Quote</span>
                            </div>
                        </div>

                        <div className={"flex flex-col items-center mt-24"}>
                            <img data-aos="zoom-out-up" className={"w-fit h-10 object-containe"} src={logo} alt={"Railverse Logo"} />

                            <p
                                style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                                data-aos="zoom-out-up"
                                className={"text-2xl mt-4 opacity-75"}
                            >
                                Powered by Worldbridge Insurance Broker
                            </p>
                            <p style={{ fontWeight: "400", fontFamily: "Arboria-Book" }} data-aos="zoom-out-up" className={"text-xl mt-4 opacity-75"}>
                                #10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore 058727
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"w-full h-0.5 bg-gray-200/70 mt-32"}></div>

                <div
                    className={
                        "w-full flex max-[850px]:flex-col max-[850px]:gap-4 items-center justify-between max-[850px]:-translate-y-[50px] -translate-y-12 pl-32 max-[730px]:px-4 max-[1200px]:pr-10 max-[1200px]:pl-20 min-[1800px]:pl-80 pr-16"
                    }
                >
                    <div data-aos="fade-right" className={"flex flex-col max-[650px]:items-center relative"}>
                        <div
                            className={` ${style.shadow_inner} max-[500px]:w-[304px] w-[374px] h-[100px] max-[500px]:h-[90px] bg-white flex items-center  rounded-2xl`}
                        >
                            <img
                                className={"w-fit h-[149px] max-[500px]:h-[100px] max-[500px]:-translate-x-2 -translate-x-7 self-end object-contain"}
                                src={support_guy}
                                alt={"support guy"}
                            />

                            <div
                                style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                                className={
                                    "flex flex-col items-center ml-7 max-[500px]:ml-2 max-[500px]:items-start text-[16px] max-[500px]:text-start font-semibold opacity-50 gap-2 "
                                }
                            >
                                <span style={{ fontWeight: "500" }}>CUSTOMER SERVICE</span>
                                <span className={"text-[18px] text-[#13519C] font-bold"}>+65 6287 7537</span>
                            </div>
                        </div>
                    </div>

                    <div
                        data-aos="fade-left"
                        className={` ${style.shadow_inner} max-[350px]:w-[304px] w-[315px] h-[75px] px-4 bg-white flex items-center justify-center  rounded-2xl`}
                    >
                        <div className={"w-full justify-around flex items-center gap-2"}>
                            <div className="flex items-center gap-2">
                                <img className={"w-fit h-9 object-contain"} src={secure} alt={"secure"} />
                                <p className="text-[#13519C]">
                                    Secured & <br /> <span className="text-[#202020]">Encrypted</span>
                                </p>
                            </div>

                            {/* <img
                className={"w-fit h-6 object-contain"}
                src={comodo}
                alt={"comodo"}
              /> */}
                            <div className="flex items-center gap-2">
                                <img className={"w-fit h-9 object-contain"} src={secure_user} alt={"secure user"} />
                                <p className="text-[#13519C]">
                                    3000+ <br /> <span className="text-[#202020]">Trust us</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full max-[800px]:px-2 max-[1440px]:px-6  max-w-[1190px] min-[1800px]:max-w-[1600px] flex flex-col  items-center"}>
                    <p
                        style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                        data-aos="fade-down"
                        className={"text-start text-[14px] max-[800px]:text-[12px] font-semibold leading-7 opacity-75 "}
                    >
                        Remark
                        <br />
                        <br />
                        Please answer all the above questions truthfully. If the insured conceals the truth or making a false statement will result in
                        the voiding of this insurance contract. The insurance company has the right to terminate the insurance contract under Section
                        865 of the Civil and Commercial Code, and may refuse to pay compensation
                        <br />
                        <br />
                        The Company does not contact customers through other (communication) channels apart from the Company’s official channels under
                        any circumstances.
                        <br />
                        <br />
                        Please note that under no circumstances shall the Company be held liable or responsible for any claims, losses, damages,
                        expenses, or other inconvenience resulting from or in any way connected with such communication.
                    </p>
                </div>
            </div>
        </>
    );
}
