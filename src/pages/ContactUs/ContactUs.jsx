import React from "react";
import style from "./style.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import support_guy from "../../Reilverse_Assets/Support_guy.svg";
import secure from "../../Reilverse_Assets/secure.png";
import comodo from "../../Reilverse_Assets/image 63345987.svg";
import logo from "../../Reilverse_Assets/Logo.png";
import mcaffe from "../../Reilverse_Assets/image 63345988.png";
import contactIcon1 from "../../Reilverse_Assets/request_callback 1.svg";
import contactIcon2 from "../../Reilverse_Assets/chatwithus 1.svg";
import contactIcon3 from "../../Reilverse_Assets/connectwhatapp 1.svg";
import contactIcon5 from "../../Reilverse_Assets/newpolicy-icon 1.svg";
import contactIcon6 from "../../Reilverse_Assets/arrow_contact.svg";
// import Footer from "../../components/Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <div className={`${style.container} `}>
        <div
          className={
            "w-10/12 rounded-xl bg-gradient-to-b from-[#fff] to-transparent p-[1.5px]"
          }
        >
          <div
            className={`${style.gradientColumn} flex w-full justify-between h-full rounded-xl bg-white overflow-hidden pr-8 pl-14 py-4`}
          >
            <div className="w-[50%] flex flex-col items-start">
              <p className="text-[#13519C] text-[24px] font-semibold">
                Contact Us
              </p>
              <span className="text-[#717171] font-normal text-[14px] mt-2">
                Any question or remarks? Just write us a message!
              </span>
              <div className="w-full mt-10">
                <form className="">
                  <div className="flex gap-8">
                    <div className="flex flex-col items-start w-[47%]">
                      <div
                        className={
                          "bg-gradient-to-t from-[#1A45D6] to-[7%] to-transparent pb-[1px] rounded-b-xl mt-4"
                        }
                      >
                        <input
                          style={{
                            fontFamily: "Arboria-Book",
                            fontWeight: "400",
                          }}
                          placeholder={"First Name"}
                          className={
                            "w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[47%]">
                      <div
                        className={
                          "bg-gradient-to-t from-[#1A45D6] to-[7%] to-transparent pb-[1px] rounded-b-xl mt-4"
                        }
                      >
                        <input
                          style={{
                            fontFamily: "Arboria-Book",
                            fontWeight: "400",
                          }}
                          placeholder={"Last Name"}
                          className={
                            "w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 mt-10">
                    <div
                      className={
                        "bg-gradient-to-t from-[#1A45D6] to-[7%] to-transparent pb-[1px] rounded-b-xl mt-4"
                      }
                    >
                      <input
                        style={{
                          fontFamily: "Arboria-Book",
                          fontWeight: "400",
                        }}
                        placeholder={"Phone"}
                        className={
                          "w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                        }
                      />
                    </div>
                    <div className="flex flex-col items-start w-[47%]">
                      <div
                        className={
                          "bg-gradient-to-t from-[#1A45D6] to-[7%] to-transparent pb-[1px] rounded-b-xl mt-4"
                        }
                      >
                        <input
                          style={{
                            fontFamily: "Arboria-Book",
                            fontWeight: "400",
                          }}
                          placeholder={"Ex : gmail.com"}
                          className={
                            "w-[270px] h-[45px] bg-transparent rounded-xl pl-7 outline-0"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-10">
                    <p className="text-[14px] font-semibold text-[#011C2A]">
                      Select Subject?
                    </p>
                    <div className="flex gap-5">
                      <div className="flex items-center mt-2 gap-2">
                        <input type="checkbox" id="generalInquiry" />
                        <label
                          htmlFor="generalInquiry"
                          className="text-[#13519C] font-medium text-[12px]"
                        >
                          General Inquiry
                        </label>
                      </div>
                      <div className="flex items-center mt-2 gap-2">
                        <input type="checkbox" id="generalInquiry2" />
                        <label
                          htmlFor="generalInquiry2"
                          className="text-[#13519C] font-medium text-[12px]"
                        >
                          General Inquiry
                        </label>
                      </div>
                      <div className="flex items-center mt-2 gap-2">
                        <input type="checkbox" id="generalInquiry3" />
                        <label
                          htmlFor="generalInquiry3"
                          className="text-[#13519C] font-medium text-[12px]"
                        >
                          General Inquiry
                        </label>
                      </div>
                      <div className="flex items-center mt-2 gap-2">
                        <input type="checkbox" id="generalInquiry4" />
                        <label
                          htmlFor="generalInquiry4"
                          className="text-[#13519C] font-medium text-[12px]"
                        >
                          General Inquiry
                        </label>
                      </div>
                    </div>
                  </div>

                  <Link to={"/uat"} className="flex justify-start mt-10">
                    <div
                      className={
                        "overflow-hidden w-[150px] h-10 flex pl-7 max-[630px]:text-start items-center self-start rounded-lg text-[16px] text-white font-semibold bg-gradient-to-tl from-[#1A45D6] to-[#1A45D6] relative mt-7"
                      }
                    >
                      <span className={"font-[400] uppercase"}>Send</span>
                      <IoIosArrowForward
                        className={"text-[150px] absolute -right-5 opacity-40"}
                      />
                    </div>
                  </Link>
                </form>
              </div>
            </div>
            {/* /////////////////// */}
            <div
              className={
                "w-[42%] rounded-t-xl h-fit bg-gradient-to-b from-[#2983D3] to-transparent p-[1.5px]"
              }
            >
              <div
                className={
                  "flex flex-col w-full items-start h-full rounded-t-xl bg-white overflow-hidden p-6"
                }
              >
                <p className="text-[#3B3B3B] text-[24px] font-semibold">
                  Need help ?
                </p>
                <p className="text-[#000] text-[16px] mt-1">
                  Choose how you like to connect with us
                </p>
                <div className="mt-6 w-full">
                  <div className="border-b border-[#E4E4E4] pb-5">
                    <div className="flex justify-between w-5/6">
                      <div className="flex gap-5 items-center">
                        <img src={contactIcon1} alt="contactIcon1" />
                        <p className="text-[#000] font-semibold text-[16px]">
                          Request a call back
                        </p>
                      </div>
                      <img src={contactIcon6} alt="contactIcon5" />
                    </div>
                  </div>
                  <div className="border-b border-[#E4E4E4] pb-5 mt-5">
                    <div className="flex justify-between w-5/6">
                      <div className="flex gap-5 items-center">
                        <img src={contactIcon2} alt="contactIcon1" />
                        <p className="text-[#000] font-semibold text-[16px]">
                          Chat with us
                        </p>
                      </div>
                      <img src={contactIcon6} alt="contactIcon5" />
                    </div>
                  </div>
                  <div className="border-b border-[#E4E4E4] pb-5 mt-5">
                    <div className="flex justify-between w-5/6">
                      <div className="flex gap-5 items-center">
                        <img src={contactIcon3} alt="contactIcon1" />
                        <div className="flex flex-col items-start">
                          <p className="text-[#000] font-medium text-[10px]">
                            Connect on Whatsapp at
                          </p>
                          <p className="text-[#13519C] font-semibold text-[16px]">
                            +65 6287 7537
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${style.contactLastColumn} px-5 py-3 mt-10 rounded-xl`}
                  >
                    <div className="flex w-5/6">
                      <div className="flex gap-5 items-center">
                        <img src={contactIcon5} alt="contactIcon4" />
                        <div className="flex flex-col items-start">
                          <p className="text-[#000] font-medium text-[10px]">
                            Need help buying a new policy ?
                          </p>
                          <p className="text-[#13519C] font-semibold text-[16px] my-1">
                            Call at +65 6287 7537
                          </p>
                          <p className="text-[#000] font-medium text-[10px]">
                            10 AM to 7 PM (use registered number)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////// */}
        <div
          className={
            "w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20"
          }
        >
          <div className={"flex flex-col items-center mt-10"}>
            <img
              data-aos="zoom-out-up"
              className={"w-fit h-10 object-containe"}
              src={logo}
              alt={"Railverse Logo"}
            />

            <p
              style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
              data-aos="zoom-out-up"
              className={"text-2xl mt-4 opacity-75"}
            >
              Powered by Worldbridge Insurance Broker
            </p>
            <p
              style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
              data-aos="zoom-out-up"
              className={"text-xl mt-4 opacity-75"}
            >
              #10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore 058727
            </p>
          </div>
        </div>
        <div
          className={
            "w-full flex max-[850px]:flex-col max-[850px]:gap-4 items-center justify-between max-[850px]:-translate-y-[50px] -translate-y-12 pl-32 max-[730px]:px-4 max-[1200px]:pr-10 max-[1200px]:pl-20 min-[1800px]:pl-80 pr-16"
          }
        >
          <div
            data-aos="fade-right"
            className={"flex flex-col max-[650px]:items-center relative"}
          >
            <div
              className={` ${style.shadow_inner} max-[500px]:w-[304px] w-[374px] h-[100px] max-[500px]:h-[90px] bg-white flex items-center  rounded-2xl`}
            >
              <img
                className={
                  "w-fit h-[149px] max-[500px]:h-[100px] max-[500px]:-translate-x-2 -translate-x-7 self-end object-contain"
                }
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
                <span className={"text-[18px]"}>1800 2333 533</span>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className={` ${style.shadow_inner} max-[350px]:w-[304px] w-[315px] h-[75px] px-4 bg-white flex items-center justify-center  rounded-2xl`}
          >
            <div className={"w-full justify-around flex items-center gap-2"}>
              <img
                className={"w-fit h-9 object-contain"}
                src={secure}
                alt={"secure"}
              />
              <img
                className={"w-fit h-6 object-contain"}
                src={comodo}
                alt={"comodo"}
              />
              <img
                className={"w-fit h-5 object-contain"}
                src={mcaffe}
                alt={"mcAffe"}
              />
            </div>
          </div>
        </div>

        <div
          className={
            "w-full max-[800px]:px-2 max-[1440px]:px-6  max-w-[1190px] min-[1800px]:max-w-[1600px] flex flex-col  items-center"
          }
        >
          <p
            style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
            data-aos="fade-down"
            className={
              "text-start text-[14px] max-[800px]:text-[12px] font-semibold leading-7 opacity-75 "
            }
          >
            Remark
            <br />
            <br />
            Please answer all the above questions truthfully. If the insured
            conceals the truth or making a false statement will result in the
            voiding of this insurance contract. The insurance company has the
            right to terminate the insurance contract under Section 865 of the
            Civil and Commercial Code, and may refuse to pay compensation
            <br />
            <br />
            The Company does not contact customers through other (communication)
            channels apart from the Company’s official channels under any
            circumstances.
            <br />
            <br />
            Please note that under no circumstances shall the Company be held
            liable or responsible for any claims, losses, damages, expenses, or
            other inconvenience resulting from or in any way connected with such
            communication.
            <br />
            <span>Copyright 2024 Rielverse All Rights Reserved.</span>
          </p>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
};
export default ContactUs;
