import React from "react";
import styles from "./style.module.css";
import saving from "../../Reilverse_Assets/savings 1.svg";
import girl from "../../Reilverse_Assets/image 20.svg";
import CommentSwiper from "../../components/CommentSwiper/CommentSwiper";
import customer from "../../Reilverse_Assets/personal-accident-cover-for-passengers 1.svg";
import satisfy from "../../Reilverse_Assets/success_great_approved_congrats 1.svg";
import award from "../../Reilverse_Assets/award 1.svg";
import waranty from "../../Reilverse_Assets/Guaran.svg";
import comparing from "../../Reilverse_Assets/comparison 1.svg";
import user from "../../Reilverse_Assets/pointer-right 1.svg";
import support from "../../Reilverse_Assets/support.svg";
import notice from "../../Reilverse_Assets/notice-assistance 1.svg";
import globe from "../../Reilverse_Assets/connected-globe 1.svg";
import green_stripe from "../../Reilverse_Assets/about_stripe.svg";
import Typewriter from "typewriter-effect";

import finger from "../../Reilverse_Assets/finger.svg";

export default function Second_section() {
    const BENEFITS = [
        {
            image: customer,
            title: "Customer Ist",
            description: "Customer Ist Approach",
        },
        {
            image: satisfy,
            title: "Satisfied",
            description: "Policy Holders",
        },
        {
            image: award,
            title: "Top",
            description: "Insurance Partners",
        },
        {
            image: waranty,
            title: "Guaranteed",
            description: "Claims Assistance",
        },
    ];

    const CARDS = [
        {
            image: saving,
            title: "Save Big on Your Policies",
            description: "We provide competitive rates with all other perks & benefits of online insurance",
        },
        {
            image: comparing,
            title: "Comparing Quotes is Verse",
            description: "We provide you with simple yet effective tools & calculators to find the best plan",
        },
        {
            image: user,
            title: "User Experience",
            description: "An awesome insurance experience which is User-friendly, Quick & Joyful",
        },
    ];

    const OFFERS = [
        {
            image: support,
            title: "GUIDANCE",
            subtitle: "Transparent Comparisons",
            description: "insurejoy.com have a team of unbiased insurance experts that is dedicated to helping you buy best insurance",
        },
        {
            image: notice,
            title: "ASSISTANCE",
            subtitle: "Application to Issuance",
            description: "From short-simple forms and a hassle free process to a Dedicated Operations Team for a smooth experience",
        },
        {
            image: globe,
            title: "SUPPORT",
            subtitle: "Dedicated Claim Desk",
            description: "We have a team of professionals that is dedicated to helping our users in the event of a claim.",
        },
    ];

    return (
        <>
            <div className={"w-full h-auto flex flex-col items-center max-[1400px]:px-4"}>
                <div
                    data-aos="zoom-in"
                    className={"w-full max-w-[1000px] px-[3px] pt-[3px] rounded-3xl h-auto bg-gradient-to-t from-transparent to-[#2553E4] mt-12 "}
                >
                    <div className={"w-full h-48 max-[800px]:h-40 max-[650px]:h-auto bg-white flex max-[650px]:flex-wrap items-center rounded-3xl"}>
                        {BENEFITS.map((value, index) => (
                            <div className={"w-1/4 max-[650px]:w-1/2 h-auto flex items-center max-[650px]:mt-4"}>
                                <div className={`${index === 2 || index === 0 ? `opacity-0` : ``} min-[650px]:hidden w-0.5 h-32 `}></div>
                                <div key={index} className={"w-full h-auto flex flex-col justify-center items-center"}>
                                    <img
                                        className={"w-[60px] max-[800px]:w-[45px] h-fit max-h-[60px] object-contain"}
                                        src={value.image}
                                        alt={"Railverse"}
                                    />

                                    <span
                                        style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                                        className={"text-[22px] max-[500px]:text-[20px]  max-[800px]:text-[22px]  mt-2"}
                                    >
                                        {value.title}
                                    </span>
                                    <span style={{ fontWeight: "400", fontFamily: "Arboria-Book" }} className={"text-[14px] "}>
                                        {value.description}
                                    </span>
                                </div>
                                <div className={`${index === 3 ? `opacity-0` : ``} max-[650px]:hidden w-0.5 h-32 `}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={"w-full flex max-[1150px]:flex-col max-[1150px]:items-center items-start mt-16 justify-center"}>
                    <div
                        data-aos="fade-right"
                        className={
                            "w-auto max-[1150px]:w-full h-auto flex flex-col  max-[1150px]:items-center max-[1150px]:text-center items-start text-start"
                        }
                    >
                        <div
                            className={
                                "w-[400px] max-[1300px]:w-auto max-[1150px]:w-full max-[1150px]:items-center h-auto flex flex-col items-start "
                            }
                        >
                            <span className={styles.mask_text}>WHO WE ARE ?</span>
                            <span className={styles.mask_text2}>
                                <Typewriter
                                    options={{
                                        strings: ["Always there for our users"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                        <span
                            style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                            className={"text-[14px] max-w-[350px] max-[1300px]:text-[15px] font-semibold mt-3 max-[1300px]:leading-7 leading-10"}
                        >
                            We are committed to serve our customers during or after the purchase of your policy, handover all your insurance related
                            worries to us and Relax!
                        </span>
                    </div>

                    <div
                        data-aos="fade-left"
                        className={"flex max-[700px]:flex-wrap max-[700px]:justify-center max-[700px]:gap-3 items-start relative max-[1150px]:mt-10 "}
                    >
                        {CARDS.map((value, index) => (
                            <div key={index} className={styles.card_background}>
                                <div className={"w-full h-full rounded-xl bg-white flex flex-col items-start px-6 pt-6 text-start "}>
                                    <img className={"w-24 max-h-[75px]  object-contain"} src={value.image} alt={"Saving"} />

                                    <span className={"text-[22px] max-[1300px]:text-xl font-[400] mt-4"}>{value.title}</span>
                                    <span
                                        style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                                        className={"text-[14px] font-[400] max-[1300px]:mt-2 mt-4"}
                                    >
                                        {value.description}
                                    </span>
                                </div>
                                {/*<div className={styles.animated_back}></div>*/}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={"w-full h-auto flex flex-col items-center relative mt-20"}>
                    {/* <img className={'w-fit h-[600px] absolute top-0 -z-10'} src={finger} alt={"Saving"}/> */}

                    <div data-aos="fade-down" className={"w-full flex flex-col items-center "}>
                        <span className={styles.mask_text3}>WHY RIELVERSE.COM ?</span>
                        <span className={styles.mask_text4}>
                            <Typewriter
                                options={{
                                    strings: ["Insurance Has Never Been So Simple ", "We Are Trying To Make It Even More!"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            {/*Insurance Has Never Been So Simple & <br/> We Are Trying To Make It Even More!*/}
                        </span>

                        <span
                            style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                            className={"text-[14px] max-[800px]:text-[16px] max-[800px]:leading-7 leading-10 mt-4"}
                        >
                            Be it the Comparisons, Helping you find the best plan for your needs, Making changes to your existing policy or even
                            claims - We are with you all the way!
                        </span>
                    </div>

                    <div
                        className={
                            "w-full min-[1800px]:max-w-[1440px] max-w-[1200px] px-[3px] pt-[3px] rounded-xl h-auto bg-gradient-to-t from-transparent to-[#2553E4] mt-12 max-[800px]:mt-6 "
                        }
                    >
                        <div
                            className={
                                "w-full h-auto bg-white flex max-[650px]:flex-col max-[650px]:items-center max-[650px]:gap-3     items-start max-[800px]:pt-3 pt-7 rounded-xl"
                            }
                        >
                            {OFFERS.map((value, index) => (
                                <div data-aos="zoom-out" className={"w-1/3 max-[650px]:w-full h-auto flex items-center"}>
                                    <div key={index} className={"w-full h-auto flex flex-col justify-center items-center px-4"}>
                                        <span style={{ fontWeight: "400", fontFamily: "Arboria-Book" }} className={"text-[18px] "}>
                                            {value.title}
                                        </span>
                                        <img
                                            className={"w-24 h-fit max-[800px]:w-16 max-h-[65px] object-contain mt-5"}
                                            src={value.image}
                                            alt={"Railverse"}
                                        />

                                        <span className={"text-[20px] max-[800px]:text-[18px] text-[#1A45D6] font-[400] mt-2"}>{value.subtitle}</span>
                                        <span
                                            style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                                            className={"text-[14px] max-[800px]:text-[12px] max-[800px]:leading-5 mt-4 tracking-[0.5px] leading-7"}
                                        >
                                            {value.description}
                                        </span>
                                    </div>
                                    <div
                                        className={`${
                                            index === 2 ? `opacity-0` : ``
                                        } w-0.5 max-[650px]:hidden h-52 bg-gradient-to-b from-[#1A45D6] to-transparent`}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={"w-full flex max-[1150px]:flex-col max-[1150px]:items-center items-start  mt-24"}>
                    <div data-aos="zoom-out-right" className={"w-full max-w-[620px] max-[1150px]:w-[330px] "}>
                        <img className={"w-full h-fit max-h-[423px] object-contain"} src={girl} alt={""} />
                    </div>

                    <div
                        data-aos="zoom-out-left"
                        className={
                            "w-full max-[1150px]:w-full max-[1200px]:w-[400px] max-[1300px]:w-[500px] max-[1400px]:w-[600px] max-w-[900px] flex flex-col items-start max-[1400px]:ml-0 ml-16 mt-8 text-start "
                        }
                    >
                        <span className={"text-[18px]  underline font-[400]"}>Reviews</span>
                        <p className={"text-[36px] max-[800px]:text-3xl leading-[25px] font-[400] mt-0"}>
                            <span className={styles.mask_text5}>What they say</span>
                            <br />
                            <span className={"relative"}>
                                About us
                                <img className={"absolute -bottom-4 w-[175px] h-[17px] object-contain"} src={green_stripe} alt={"stripe"} />
                            </span>
                        </p>
                        <p
                            style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                            className={"text-[21px] max-[800px]:text-lg max-[800px]:mt-4 tracking-[1px] leading-[40px] mt-12 "}
                        >
                            We're honoured to have helped these begin a <span className={"text-[#13519C]"}> SMILING FACES </span> new life abroad
                        </p>

                        <CommentSwiper />
                    </div>
                </div>
            </div>
        </>
    );
}
