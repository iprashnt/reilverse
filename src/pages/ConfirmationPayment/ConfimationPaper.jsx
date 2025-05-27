import React, { useEffect } from "react";
import style from "./style.module.css";
import Confirmation from "./components/Confirmation/Confirmation";
import white_vector from "../../Reilverse_Assets/Vector white.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { convertKhrToUsd, formatNumber } from "../../helpers/currency";
import edit_icon from "../../Reilverse_Assets/edit (6) 1.svg";
import insurance from "../../Reilverse_Assets/forte.png";
import closeIcon from "../../Reilverse_Assets/closeIcon.svg";
import arrow from "../../Reilverse_Assets/Vector white.svg";

import { FileUp } from "lucide-react";

import { useState } from "react";

export default function ConfimationPaper() {
  const location = useLocation();
  const navigate = useNavigate();
  const exchangeRate = 4100.07;

  // State variables
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [validate, setValidate] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [scope, setScope] = useState("");
  const [quoteNo, setQuoteNo] = useState("");
  const [name, setName] = useState("");

  // Destructure location state
  const {
    totalAmount = 0,
    activeType = [],
    insurancePackages = {},
    premiumData = {},
    defaultStartDate="",
    ProposalNO=""
  } = location.state || {};

  // Helper function to convert USD to KHR
  const convertToKHR = (usd) => {
    return (usd * exchangeRate).toFixed(2);
  };

  // Helper function to validate form
  const validateForm = () => {
    console.log("Total Amount:", totalAmount);
  console.log("Active Type:", activeType);
  console.log("Insurance Packages:", insurancePackages);
  console.log("Premium Data:", premiumData);
  console.log("Default Start Date:", defaultStartDate);
  console.log("Proposal No:", ProposalNO);
    if (Object.keys(formData).length === 0) {
      console.error("Please fill out the form details before proceeding.");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    setValidate(true);
  };

  // Helper function to format date ranges
  const formatDateRange = (startDate, endDate) => {
    const months = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
    ];

    const format = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    };

    return `${format(startDate)} TO ${format(endDate)}`;
  };

  // Navigate to payment page
  const handleClick = async () => {
    try {
      navigate("/uat/payment", {
        state: { totalAmount, activeType,ProposalNO, },
      });
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  // User details callback
  const userDetails = (details) => {
    setFormData(details);
  };

  // Null-safe vehicle risk and premium data
  const vehicleRisk =
    insurancePackages?.duepremium?.PolicyLobList?.[0]?.PolicyRiskList?.[0] || {};
  const sumInsured = premiumData?.suminsured || 0;

  const vehicleDetails = [
    { title: "Make & Model", value: `${vehicleRisk.Make || ""} ${vehicleRisk.Model || ""}` },
    { title: "Year of Manufacture", value: new Date(vehicleRisk.ManufactureDate || "").getFullYear() || "N/A" },
    { title: "Chassis No", value: vehicleRisk.ChassisNo || "N/A" },
    { title: "Engine No", value: vehicleRisk.EngineNo || "N/A" },
    { title: "Registration No.", value: vehicleRisk.RegistrationNo || "TEMP" },
    { title: "Capacity", value: `${vehicleRisk.EngineCapacity || "N/A"} CC` },
    { title: "Sum Insured (USD)", value: sumInsured || 0 },
    { title: "NCD %", value: vehicleRisk.PrevInsuranceList?.[0]?.PrevPolicyNCB || 0 },
  ];

  // Effect to set data on mount or formData update
  useEffect(() => {
    const effectiveDate = insurancePackages?.duepremium?.EffectiveDate || "";
    const expiryDate = insurancePackages?.duepremium?.ExpiryDate || "";

    if (effectiveDate && expiryDate) {
      setStartDate(formatDateRange(effectiveDate, expiryDate));
    }
    setName(formData.firstName || "");
    setAddress(formData.address || "");
    setOccupation(formData.occupation || "");
    setScope(activeType?.[0]?.name || "");
    setQuoteNo(ProposalNO||"");
  }, [formData, insurancePackages, activeType]);
  const insuranceDetails = [
    { label: "Basic", value: 21950.0 },
    { label: "Third Party", value: 12100.0 },
    { label: "Wind Screen", value: 65.0 },
    { label: "War Risk", value: 650.0 },
    { label: "Acts of God", value: 650.0 },
    { label: "SRCC", value: 650.0 },
    { label: "Theft", value: 3292.5 },
    { label: "Nill Excess", value: 25000.0 },
    { label: "Betterment", value: 6585.0 },
  ];

  return (
    <>
      <div className={style.container}>
        {validate ? (
          <div
            className={
              "w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20"
            }
          >
            <div
              className={
                "w-full flex items-start max-[950px]:flex-col h-auto gap-10"
              }
            >
              <Confirmation userDetails={userDetails} date={defaultStartDate} />

              <div
                className={
                  "max-[950px]:w-full w-[350px] h-auto bg-gradient-to-b from-[#2983D3] to-transparent p-[1px] rounded-t-xl"
                }
              >
                <div
                  className={
                    "w-full rounded-t-xl flex flex-col items-start bg-gradient-to-b from-white to-white/30 p-4"
                  }
                >
                  <div className={"w-full flex items-start justify-between"}>
                    <div className={"flex flex-col items-start text-start"}>
                      <span className={"text-[16px]"}>Policy Details</span>
                      <span
                        className={
                          "text-[16px] text-[#13519C] flex items-center "
                        }
                      >
                        Type 3{" "}
                        <img
                          className={"w-[18px] h-[18px] object-contain ml-3"}
                          src={edit_icon}
                          alt={"edit icon"}
                        />{" "}
                      </span>
                    </div>
                    <div className={"flex flex-col items-start text-end"}>
                      {/* <span className={"text-[24px] text-[#13519C]"}>
                        {formatNumber(convertToKHR(totalAmount))}៛
                      </span> */}
                       <span className={"text-[24px] text-[#13519C]"}>
                        {formatNumber(totalAmount)}$
                      </span>
                      <span
                        style={{
                          fontFamily: "Arboria-Book",
                          fontWeight: "400",
                        }}
                        className={"text-[12px] text-[#13519C] "}
                      >
                        per year
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      "w-[80%]   self-center border-t-2 border-[#C7C7C7] border-dashed my-5"
                    }
                  >
                    {" "}
                  </div>
                  <div className={"w-full flex justify justify-between"}>
                    {/* <div
                      className={"flex flex-col items-start text-star gap-2"}
                    >
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        Type 3
                      </span>
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        Deductible
                      </span>
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        Repair type
                      </span>
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        Number of drivers
                      </span>
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        Policy start date
                      </span>
                    </div>
                    <div className={"flex flex-col items-start text-end gap-2"}>
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        300 ៛
                      </span>
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        0៛
                      </span>
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        Garage
                      </span>
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        Unlimited
                      </span>
                      <span
                        style={{ fontFamily: "Arboria-Book", fontWeight: "00" }}
                        className={"text-[12px]"}
                      >
                        Fri, 29 Mar 2024
                      </span>
                    </div> */}
                    <div
                  className=" w-full rounded-t-2xl backdrop-blur-[32px]  flex flex-col gap-1
                  max-[500px]:w-full max-[500px]:h-auto"
                >
                  <h2 className="text-lg mb-4 text-[#102770] font-bold flex flex-start">
                    Premium Breakup
                  </h2>
                  {insuranceDetails.map((item, index) => (
                    <p
                      key={index}
                      className="flex justify-between text-xs text-black font-medium"
                    >
                      <span>{item.label}</span>
                      <span className="flex items-center">
                        {item.value.toLocaleString("en-US")}
                        <span className="text-lg">៛</span>
                      </span>
                    </p>
                  ))}
                </div>
                  </div>

                  <div
                    className={
                      "w-[80%] h-0.5 self-center border-2 border-[#C7C7C7] border-dashed my-5"
                    }
                  ></div>
                  {/* <div className={"w-full flex items-start justify-between"}>
                    <div
                      className={"flex flex-col items-start text-star gap-2"}
                    >
                      <span className={"text-[16px]"}>Sub-total</span>
                      <span
                        style={{
                          fontFamily: "Arboria-Book",
                          fontWeight: "400",
                        }}
                        className={"text-[12px]"}
                      >
                        + Stamp duty
                      </span>
                      <span
                        style={{
                          fontFamily: "Arboria-Book",
                          fontWeight: "400",
                        }}
                        className={"text-[12px]"}
                      >
                        + VAT
                      </span>
                    </div>
                    <div className={"flex flex-col items-start text-end gap-2"}>
                      <span
                        style={{
                          fontFamily: "Arboria-Book",
                          fontWeight: "400",
                        }}
                        className={"text-[12px] "}
                      >
                        290៛
                      </span>
                      <span
                        style={{
                          fontFamily: "Arboria-Book",
                          fontWeight: "400",
                        }}
                        className={"text-[12px] "}
                      >
                        9៛
                      </span>
                      <span
                        style={{
                          fontFamily: "Arboria-Book",
                          fontWeight: "400",
                        }}
                        className={"text-[12px] "}
                      >
                        1៛
                      </span>
                    </div>
                  </div> */}
                  <div
                    className={"w-full flex items-start justify-between mt-2"}
                  >
                    <div className={"flex flex-col items-start text-start"}>
                      <span className={"text-[21px]"}>Final Price</span>
                      <p className={"text-[10px] max-w-[150px] "}>
                        By continuing, you have agreed to our{" "}
                        <span className={"text-[#13519C]"}>Privacy Policy</span>{" "}
                        and <span className={"text-[#13519C]"}>T&C</span>{" "}
                      </p>
                    </div>
                    <div
                      className={
                        "flex flex-col items-start text-end  p-3 rounded-md"
                      }
                    >
                      <span
                        className={
                          "text-[18x] text-[#13519C] flex justify-end w-full text-left mb-2"
                        }
                      >
                        {/*<span className="text-[12px]">Final Price</span>*/}
                        {/* <span>
                          {formatNumber(convertToKHR(totalAmount + 1))}៛
                        </span> */}
                         <span>
                          {formatNumber(totalAmount + 1)}$
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={"flex flex-col items-center mt-5"}>
                    <div
                      className={
                        "w-[175px] h-10 rounded-lg bg-[#13519C] text-white flex items-center justify-center cursor-pointer"
                      }
                      onClick={validateForm}
                    >
                      <span className={"text-[12px]"}>Confirm and pay</span>

                      <img
                        className={
                          "w-[19px] h-[13px] object-contain ml-3 translate-y-0.5"
                        }
                        src={white_vector}
                        alt={"white vector"}
                      />
                    </div>
                    <span
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      className={"text-[10px]"}
                    >
                      Get your policy online instantly!
                    </span>
                  </div>

                  {error ? (
                    <span
                      style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                      className={"text-[12px] text-red-600"}
                    >
                      Please fill out all the form details before proceeding.
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex  font-[Arboria-Medium] md:flex-nowrap flex-wrap bg-[#FFFFFF] w-[1200px] h-[700px] rounded flex-col  ">
              <div className="flex w-[1144px] h-[77px] justify-between mx-7 items-center">
                <div
                  className={
                    "w-[200px] h-[77px] rounded-b-xl bg-gradient-to-t from-[#13519C] to-transparent p-[1.5px]"
                  }
                >
                  <div
                    className={
                      "flex items-center w-full h-full rounded-b-xl bg-white overflow-hidden"
                    }
                  >
                    <img src={insurance} className={"w-11/12"} />
                  </div>
                </div>
                <img
                  src={closeIcon}
                  alt=""
                  className="w-7 h-7 cursor-pointer"
                  onClick={() => setValidate(false)}
                />
              </div>
              <div className="flex justify-between mx-7 my-8 ">
                <div className="flex flex-col text-left gap-2">
                  <span className="text-lg font-semibold">
                    PERIOD OF INSURANCE :
                  </span>
                  <span className="text-lg font-semibold text-[#13519C]">
                    {startDate}
                  </span>
                </div>
                <div className="flex flex-col text-right justify-end gap-2">
                  <span className="text-lg font-semibold">
                    Quote No :{""}
                    <span className="text-[#13519C]">{quoteNo}</span>{" "}
                  </span>
                  <button className="w-[136px] h-8 rounded-md border border-[#13519C] text-[#13519C] flex items-center ml-[80px]  ">
                    <FileUp src={closeIcon} className="w-4 h-4 mx-2" />
                    Share Quote
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-start font-semibold text-lg w-[600px] mx-7 text-left gap-5">
                <div className="flex ">
                  <span className="w-[170px]">INSURED NAME :</span>
                  <span className="text-[#13519c]">{name}</span>
                </div>
                <div className="flex ">
                  <span className="w-[170px]">ADDRESS:</span>
                  <span className="text-[#13519c] text-left">
                   {address}
                  </span>
                </div>
                <div className="flex">
                  <span className="w-[170px]">OCCUPATION :</span>
                  <span className="text-[#13519c]">{occupation}</span>
                </div>
                <div className="flex">
                  <span className="w-[170px]">SCOPE OF COVER : </span>
                  <span className="text-[#13519c]">
                    {scope}
                  </span>
                </div>
                <span className="w-[170px] font-semibold text-lg">
                  VEHICLE(S) :
                </span>
              </div>
              <div
                className={
                  "w-full min-[1800px]:max-w-[1140px] max-w-[1144px] px-[3px] pt-[3px] rounded-xl h-auto bg-gradient-to-t from-transparent to-[#13519C]  max-[800px]:mt-6 mx-7 my-2  "
                }
              >
                <div
                  className={
                    "w-full min-[1800px]:max-w-[1140px] max-w-[1144px] h-auto bg-white flex max-[650px]:flex-col max-[650px]:items-center max-[650px]:gap-3 items-start max-[800px]:pt-3 pt-6 rounded-xl"
                  }
                >
                  {vehicleDetails.map((value, index) => (
                    <div
                      className={
                        "w-1/8 max-[650px]:w-full h-[100px] flex items-center mx-1 text-lg"
                      }
                    >
                      <div
                        key={index}
                        className={
                          "w-full p-2 h-auto flex flex-col justify-center font-semibold font-arboria "
                        }
                      >
                        <span className={" "}>{value.title}</span>

                        <span
                          className={
                            " max-[800px]:text-lg text-[#13519C] font-[400] mt-2"
                          }
                        >
                          {value.value}
                        </span>
                      </div>
                      <div
                        className={`${
                          index === vehicleDetails.length - 1 ? `opacity-0` : ``
                        } w-0.5 max-[650px]:hidden h-[100px] bg-gradient-to-b from-[#13519C] to-transparent mx-2`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end w-[cal(100%-54px)] h-auto m-7">
                <div className="flex flex-col text-start">
                  <div
                    className=" flex justify-between items-center text-[#fff] px-4 w-[175px] h-[40px] rounded-lg bg-[#13519c] cursor-pointer  "
                    onClick={handleClick}
                  >
                    {" "}
                    <span>Confirm & Pay</span>
                    <img src={arrow} alt="" className="w-8 h-6" />
                  </div>
                  <span className="text-[10px] text-[#102770] ">
                    Terms & Conditions*
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
