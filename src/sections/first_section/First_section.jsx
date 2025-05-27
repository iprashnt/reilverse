import React, { useState } from "react";
import style from "./style.module.css";
import couple from "../../Reilverse_Assets/couple.png";
import car from "../../Reilverse_Assets/Car.svg";
import scooter from "../../Reilverse_Assets/scooter.svg";
import luxury from "../../Reilverse_Assets/LuxWatch.svg";
import jewellery from "../../Reilverse_Assets/Jewellery.svg";
import life from "../../Reilverse_Assets/Life.svg";
import smallbiz from "../../Reilverse_Assets/Small.svg";
import arrowicon from "../../Reilverse_Assets/arrow.svg";
import industry from "../../Reilverse_Assets/industry (1) 1.svg";

import Typewriter from "typewriter-effect";

export default function First_section() {
  const [currentVariant, setCurrentVariant] = useState(0);

  const CATEGORIES = [
    {
      card_image: car,
      card_title: "Motor",
      card_href: "/car_brand",
      category: "Tuk Tuk",
      category_href: "",
    },
    {
      card_image: scooter,
      card_title: "Health",
      card_href: "",
      category: "Motocycle",
      category_href: "",
    },
    {
      card_image: smallbiz,
      card_title: "Personal Cyber",
      card_href: "",
      category: "Travel",
      category_href: "",
    },
    {
      card_image: luxury,
      card_title: "Luxury Watch",
      card_href: "",
      category: "Life",
      category_href: "",
    },
    {
      card_image: jewellery,
      card_title: "Jewellery",
      card_href: "",
      category: "Life",
      category_href: "",
    },
    {
      card_image: life,
      card_title: "Life",
      card_href: "",
      category: "Life",
      category_href: "",
    },
  ];

  const VARIANTS = ["PERSONAL", "BUSINESS"];

  return (
    <>
      <div
        className={
          "w-full max-[1440px]:px-0 max-[500px]:px-2 flex max-[1150px]:flex-col justify-center items-center relative mt-0"
        }
      >
        {/* <img data-aos="zoom-in" src={couple} className={'w-[500px] max-[800px]:w-[300px] max-[1350px]:w-[400px] max-w-[500px] max-h-[380px]  h-fit  object-contain mr-3 '}/> */}
        <div
          className={"w-full max-w-[800px] flex flex-col items-end text-start "}
        >
          {/* <span data-aos="fade-left" className={'max-[1150px]:self-center self-start max-[1150px]:text-center min-[1800px]:text-[40px] text-[36px] font-[400] text-green-700 tracking-[-1px]   '}>
                    <Typewriter
                        options={{
                            strings: ['We Make Finding The Best', 'Insurance Verse'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
                <span data-aos="fade-left" className={'max-[1150px]:self-center self-start text-[18px] font-[400] text-green-950 mt-2'}>
                    <Typewriter
                        options={{
                            strings: ['compare plans from top insurance companies'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span> */}
          <div className="">
            <div className="text-start lg:text-left mr-[170px]">
              <h1 className="text-4xl text-[#1A45D6] md:text-[56px] leading-[70px] font-bold mb-4">
                The #1 Trusted Platform <br /> For Your Insurance <br /> Needs
              </h1>
              <div className="text-[#3B417B] text-[17px] mb-6 font-[100]">
                Your financial literacy journey starts here
              </div>
              <button className="bg-[#1743EA] text-[#FFFFFF] font-medium py-3 px-6 rounded-md shadow-md hover:bg-blue-100 flex items-center">
                Get Quote
                <img className="ml-2" src={arrowicon} />
              </button>
            </div>
          </div>

          <div className={"w-full  max-w-[900px] self-start h-auto mt-52"}>
            <div
              data-aos="fade-left"
              className={
                "w-[320px] max-[500px]:w-[200px] max-[800px]:w-[280px] h-14 bg-white shadow-inner rounded-xl self-start p-1.5 flex gap-1 relative overflow-hidden"
              }
            >
              <div
                style={{ transform: `translateX(${currentVariant * 100}%)` }}
                className={
                  "w-1/2 h-full bg-[#2552E333]/20 rounded-xl duration-500"
                }
              ></div>
              <div
                className={
                  "absolute  w-[97.5%] h-[43px] rounded-xl flex items-center gap-1"
                }
              >
                {VARIANTS.map((value, index) => (
                  <div
                    onClick={() => setCurrentVariant(index)}
                    className={`w-1/2 h-full rounded-xl flex flex-col items-center justify-center text-[12px] font-[400] duration-500 cursor-pointer ${
                      currentVariant === index ? `text-[#1743EA]` : ``
                    } `}
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={
              "w-full max-w-[900px] h-auto justify-between flex items-start self-start max-[800px]:gap-2 max-[500px]:gap-1 mt-4"
            }
          >
            {CATEGORIES.map((value, index) => (
              <div
                data-aos="zoom-in"
                onClick={() => (window.location.href = `${value.card_href}`)}
                key={index}
                className={
                  "w-44 max-w-[120px]  max-[800px]:h-36 flex flex-col justify-between text-center"
                }
              >
                <div
                  className={
                    "w-full h-32 max-[800px]:h-24 border-2 border-transparent  rounded-2xl duration-300 hover:border-dashed hover:border-[#c3e45e] cursor-pointer "
                  }
                >
                  <div
                    className={
                      "w-full  h-28 max-[800px]:h-24 flex flex-col items-center pt-4 pb-4 rounded-2xl bg-white shadow border border-[#c3e45e] duration-300 hover:translate-y-2 hover:-translate-x-1 active:translate-y-0 active:translate-x-0"
                    }
                  >
                    <div
                      className={
                        "flex h-full justify-between flex-col items-center  "
                      }
                    >
                      <img
                        className={`w-fit ${
                          index === 0
                            ? `h-[25px] max-[800px]:h-5 translate-y-4`
                            : `h-[45px] max-[800px]:h-10`
                        }  object-contain`}
                        src={value.card_image}
                        alt={"Car logo"}
                      />

                      <span
                        className={` ${
                          index === 0 ? `max-[800px]:translate-y-3` : ``
                        } text-[14px] text-center max-[800px]:text-[16px] font-[400]  text-[#2553E4]`}
                      >
                        {value.card_title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 
                        <div className={'w-full h-10 flex justify-center items-center rounded-xl bg-white shadow border border-[#c3e45e] cursor-pointer'}>
                            <span className={'text-[14px] font-[400] text-green-900'}>{value.category}</span>
                        </div> */}
              </div>
            ))}
          </div>

          <div
            className={
              "w-full max-w-[900px] justify-between flex items-start self-start max-[800px]:gap-2 max-[500px]:gap-1 "
            }
          >
            {CATEGORIES.map((value, index) => (
              <div
                data-aos="zoom-in"
                onClick={() => (window.location.href = `${value.card_href}`)}
                key={index}
                className={
                  "w-44 max-w-[120px] h-44 max-[800px]:h-36 flex flex-col justify-between text-center"
                }
              >
                <div
                  className={
                    "w-full h-32 max-[800px]:h-24 border-2 border-transparent  rounded-2xl duration-300 hover:border-dashed hover:border-[#c3e45e] cursor-pointer "
                  }
                >
                  <div
                    className={
                      "w-full  h-28 max-[800px]:h-24 flex flex-col items-center pt-4 pb-4 rounded-2xl bg-white shadow border border-[#c3e45e] duration-300 hover:translate-y-2 hover:-translate-x-1 active:translate-y-0 active:translate-x-0"
                    }
                  >
                    <div
                      className={
                        "flex h-full justify-between flex-col items-center  "
                      }
                    >
                      <img
                        className={`w-fit ${
                          index === 0
                            ? `h-[25px] max-[800px]:h-5 translate-y-4`
                            : `h-[45px] max-[800px]:h-10`
                        }  object-contain`}
                        src={value.card_image}
                        alt={"Car logo"}
                      />

                      <span
                        className={` ${
                          index === 0 ? `max-[800px]:translate-y-3` : ``
                        } text-[14px] text-center max-[800px]:text-[16px] font-[400]  text-[#2553E4]`}
                      >
                        {value.card_title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 
                        <div className={'w-full h-10 flex justify-center items-center rounded-xl bg-white shadow border border-[#c3e45e] cursor-pointer'}>
                            <span className={'text-[14px] font-[400] text-green-900'}>{value.category}</span>
                        </div> */}
              </div>
            ))}
          </div>

          {/* <div data-aos="zoom-in" className={'w-[330px] max-[500px]:w-full h-24 flex flex-col items-center self-center mt-8'}>

                    <div className={'w-full h-0.5 bg-[#c3e45e]'}></div>

                    <div className={'flex items-center my-3 gap-2'}>

                        <span className={'text-[16px] max-[500px]:text-sm font-[400] tracking-[0px] '}>Pickup where you left</span>

                        <div className={'flex items-center justify-center px-6 py-3 text-[10px] font-[400] rounded-lg cursor-pointer bg-gradient-to-r from-[#eaf755] to-[#8fc24c]'}>Older searches</div>

                    </div>

                    <div className={'w-full h-0.5 bg-[#c3e45e]'}></div>

                </div> */}
        </div>
        <img
          data-aos="zoom-in"
          src={couple}
          className={
            "w-[672px] max-[800px]:w-[300px] max-[1350px]:w-[500px] max-w-[500px] max-h-[480px] object-contain mr-3 "
          }
        />
      </div>
    </>
  );
}
