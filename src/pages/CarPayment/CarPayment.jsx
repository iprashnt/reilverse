import React, {useState,useEffect} from "react";
import style from "./style.module.css";
import insurance from "../../Reilverse_Assets/forte.png";
import question from "../../Reilverse_Assets/question-square 1.svg";
import SideBar from "./components/SideBar/SideBar";
import {IoSettingsOutline} from "react-icons/io5";
import {Drawer, Modal,Alert, Space} from "antd";
import {Link} from "react-router-dom";
import axios from 'axios';

export default function CarPayment() {

    const [openParams,setParams] = useState(false);
    const [openMoreDetails,setopenMoreDetails] = useState(false);
    const [insurancePackages,setInsurancePackages] = useState(null);
    const [activeType,setType] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

        const showModal = () => {
            setIsModalOpen(true);
        };

        const handleOk = () => {
            setIsModalOpen(false);
        };

    const QUALITIES = [
        {
            name:"Garage repair",
        },
        {
            name:"1,280,000 THB car coverage",
        },
        {
            name:"No deductible",
        },
        {
            name:"Fire, theft & flood coverage",
        },
        {
            name:"Requires car inspection",
        },
    ]

    useEffect(() => {
        axios.get('https://insurance-eight-umber.vercel.app/api/getinsurancepackages')
            .then(response => {
                setInsurancePackages(response.data)
                setTotalAmount(response.data.duepremium)
            })
            .catch(error => {
            console.error(error);
            });
    }, []);
    
    const handleAddons = (value) => {
        if(totalAmount!==0){
            setType((prevActiveType) => {
                const index = prevActiveType.findIndex((item) => item.name === value.name);
            
                // Calculate totalGrossPremium before updating updatedArray
                let totalGrossPremium = totalAmount;
            
                if (index !== -1) {
                  const updatedArray = [...prevActiveType];
                  const removedAddon = updatedArray[index];
                  updatedArray.splice(index, 1);
            
                  const matchingCoverage = insurancePackages&& insurancePackages.policycoverage.find(
                    (coverage) => coverage.ProductElementCode === removedAddon.Code
                  );
                  if (matchingCoverage) {
                    // Subtract GrossPremium of the removed item from totalGrossPremium
                    totalGrossPremium -= matchingCoverage.GrossPremium;
                    setTotalAmount(totalGrossPremium);
                  }
            
                  return updatedArray;
                } else {
                  const updatedArray = [...prevActiveType, value];
            
                  const matchingCoverage = insurancePackages&& insurancePackages.policycoverage.find(
                    (coverage) => coverage.ProductElementCode === value.Code
                  );
                  if (matchingCoverage) {
                    // Add GrossPremium of the added item to totalGrossPremium
                    totalGrossPremium += matchingCoverage.GrossPremium;
                    setTotalAmount(totalGrossPremium);
                  }
            
                  return updatedArray;
                }
              });
        }
       
      };
      


    return<>
        <div className={style.container}>
            <Drawer
                styles={{header: {fontFamily:"Arboria-Medium",fontWeight:"400"}}}
                open={openParams}
                onClose={()=>setParams(false)}
                placement={'left'}
                title={'Params'}
            >
                <SideBar/>
            </Drawer>
            <Drawer
                styles={{header: {fontFamily:"Arboria-Medium",fontWeight:"400"}}}
                open={openMoreDetails}
                onClose={()=>setopenMoreDetails(false)}
                placement={'right'}
                title={'Total Amount'}
            >
                <li style={{fontFamily:"Arboria-Medium",fontSize:"24px"}}  className={'w-[260px] flex items-start justify-between'}>Due Premium : {insurancePackages&&insurancePackages.duepremium}</li>
                {
                    activeType.map(type=>
                        <li style={{fontFamily:"Arboria-Medium",fontSize:"24px"}}  className={'w-[260px] flex items-start justify-between'}>{type.name} : {type.amount}</li>
                    )
                }
                <li style={{fontFamily:"Arboria-Medium",fontSize:"24px"}}  className={'w-[260px] flex items-start justify-between'}>Total : {totalAmount}</li>
            </Drawer>
            <Modal  open={isModalOpen} onOk={handleOk}
            closable={false}
            cancelButtonProps={{ style: { display: 'none' } }}
            
            >
                <div style={{display:"flex",justifyContent:"center"}}>
                <img src={insurance} style={{width:"200px",height:"100px"}}/>
                </div>
                
                <Space
                    direction="vertical"
                    style={{
                    width: '100%',
                    }}
                >
                    <Alert message={
                        <>
                        <li style={{fontFamily:"Arboria-Medium",fontSize:"20px"}}  className={'w-[260px] flex items-start justify-between'}>Due Premium : {insurancePackages&&insurancePackages.duepremium}K</li>
                {
                    activeType.map(type=>
                        <li style={{fontFamily:"Arboria-Medium",fontSize:"20px"}}  className={'w-[260px] flex items-start justify-between'}>{type.name} : {type.amount}K</li>
                    )
                }
                <li style={{fontFamily:"Arboria-Medium",fontSize:"20px",color:"#8DC14B"}}  className={'w-[260px] flex items-start justify-between'}>Total : {totalAmount}K</li>
                </>
                        
                    }
                     type="info" />

                    </Space>
            </Modal>
            <div className={'w-full max-[520px]:px-4 max-[1200px]:px-10 max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center pb-20'}>

                <div className={'w-auto flex items-start gap-10 max-[1250px]:gap-3 max-[680px]:flex-col max-[680px]:w-full'}>


                    {/*Left SideBar*/}
                    <div onClick={()=>setParams(true)} className={'w-full min-[680px]:hidden bg-white/70 h-10 rounded duration-100 active:text-[#8DC14B] active:translate-y-0.5 flex items-center justify-center gap-2 text-[14px]'}>
                        <IoSettingsOutline />
                        Params
                    </div>
                    <div className={'max-[680px]:hidden'}>
                        <SideBar activeTypes={activeType} handleAddons={handleAddons}/>
                    </div>


                    {/*Insurance Card */}
                    <div className={'flex items-start flex-wrap'}>

                        <div className={'w-[815px] h-[214px] rounded-xl bg-white/70 flex items-start max-[1150px]:flex-col max-[1150px]:h-auto max-[1150px]:w-auto max-[1150px]:pr-5 max-[1150px]:pb-5 '}>

                            <div className={'w-[176px] h-[77px] rounded-b-xl bg-gradient-to-t from-[#8DC14B] to-transparent p-[1px] ml-10'}>
                                <div className={'w-full h-full rounded-b-xl bg-white relative overflow-hidden'}>
                                    <img src={insurance} className={'w-full h-full object-contain '}/>
                                </div>
                            </div>

                            <div className={'w-auto flex flex-col items-start ml-10 mt-2 text-start text-[16px] leading-[32px]'}>
                                <ul className={'list-disc'}>
                                    {QUALITIES.map((value, index)=> <li key={index} className={'w-[260px] flex items-start justify-between'}>
                                        {value.name}
                                        <img src={question} className={'w-[24px] h-[24px] object-contain'} alt={'question'}/>
                                    </li>)}
                                </ul>
                            </div>

                            <div className={'w-auto flex flex-col items-center ml-10 mt-4'}>

                                <span className={'text-[26px] text-[#8DC14B]'}>{(totalAmount===0)?"Loading...":totalAmount + "K"}</span>

                                <Link to={"/confirmation_payment"} className={'w-[175px] h-10 rounded bg-[#8DC14B] text-white text-[16px] flex flex-col items-center justify-center'}>Buy Now</Link>

                                <div className={'flex items-center mt-5 '}>

                                    <div className={'w-[40px] h-0.5 border border-dashed border-[#C0C0C0]'}></div>

                                    <div style={{cursor:"pointer"}} className={'mx-1 w-[94px] h-[25px] rounded border border-[#3E3E3E] text-[9px] text-[#3E3E3E] flex justify-center items-center'}
                                    onClick={showModal}
                                    >More Details</div>

                                    <div className={'w-[40px] h-0.5 border border-dashed border-[#C0C0C0]'}></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </>
}