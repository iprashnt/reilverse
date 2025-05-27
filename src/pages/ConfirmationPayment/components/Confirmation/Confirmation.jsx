import React, { useState } from "react";
import { DatePicker } from "antd";

export default function Confirmation() {
  const [policyStart, setPolicyStart] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <div
        style={{ fontFamily: "Arboria-Medium", fontWeight: "400" }}
        className={
          "w-[770px] max-[950px]:w-full h-auto bg-gradient-to-b to-transparent  p-[1px] rounded-t-xl"
        }
      >
        <div
          className={
            "w-full h-auto flex flex-col items-start bg-gradient-to-b from-white to-white/30 px-5 pt-3 pb-20 rounded-t-xl text-start"
          }
        >
          <span className={"text-[24px] max-[500px]:text-[21px] font-[400] "}>
            Confirmation
          </span>
          <span
            style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
            className={"text-[18px] max-[500px]:text-[14px] font-[400]  "}
          >
            Our insurance consultant will call you to confirm the order after it
            has been submitted.
          </span>

          {/* <span className={'text-[24px] max-[500px]:text-[21px] font-[400] '}>Policy start date ?</span> */}
          {/* <span style={{fontFamily:"Arboria-Book",fontWeight:"400"}} className={'text-[18px] max-[500px]:text-[14px] font-[400]  '}>If you currently have a policy that will expire soon, please select a new policy start date that matches the end date of your current policy for continuous coverage.</span> */}
          <DatePicker
            className={"outline-0 border border-[#1A45D6] mt-2 w-[250px] h-12"}
            onChange={(date, dateString) => setPolicyStart(dateString)}
            format="YYYY-MM-DD"
            placeholder="DD / MM / YYYY"
          />

          <div className={"flex items-start flex-wrap gap-10 mt-7 "}>
            <div
              className={
                "h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start"
              }
            >
              <div className={"flex flex-col items-start "}>
                <span className={"text-[21px]"}>What is your first name ?</span>
                <span
                  style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                  className={"text-[14px] mb-3"}
                >
                  Need Help ?
                </span>
              </div>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                style={{ fontFamily: "Arboria-Light", fontWeight: "400" }}
                placeholder={"First Name"}
                className={
                  " max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#1A45D6]"
                }
              />
            </div>

            <div
              className={
                "h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start"
              }
            >
              <div className={"flex flex-col items-start "}>
                <span className={"text-[21px]"}>What is your Last name ?</span>
                <span
                  style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                  className={"text-[14px] mb-3"}
                >
                  Need Help ?
                </span>
              </div>
              <input
                onChange={(e) => setLastName(e.target.value)}
                style={{ fontFamily: "Arboria-Light", fontWeight: "400" }}
                placeholder={"Last Name"}
                className={
                  " max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#1A45D6]"
                }
              />
            </div>

            <div
              className={
                "h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start"
              }
            >
              <div className={"flex flex-col items-start "}>
                <span className={"text-[21px]"}>What is your email ?</span>
                <span
                  style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                  className={"text-[14px] mb-3"}
                >
                  Need Help ?
                </span>
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontFamily: "Arboria-Light", fontWeight: "400" }}
                placeholder={"Ex : gmail.com"}
                className={
                  " max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#1A45D6]"
                }
              />
            </div>

            <div
              className={
                "h-[130px] max-[500px]:h-auto justify-between flex flex-col items-start text-start"
              }
            >
              <div className={"flex flex-col items-start "}>
                <span className={"text-[21px]"}>
                  What is your phone number ?
                </span>
                <span
                  style={{ fontFamily: "Arboria-Book", fontWeight: "400" }}
                  className={"text-[14px] mb-3"}
                >
                  Need Help ?
                </span>
              </div>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ fontFamily: "Arboria-Light", fontWeight: "400" }}
                placeholder={"086 - 594030302"}
                className={
                  " max-[500px]:w-[190px] w-[260px] h-[50px] rounded-xl outline-0 border shadow-inner pl-12 border-[#1A45D6]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
