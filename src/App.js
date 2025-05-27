import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import vector4 from "./Reilverse_Assets/homebg.svg";
import CarBrand from "./pages/CarBrand/CarBrand";
import Driver_info from "./pages/Driver_info/Driver_info";
import CarPayment from "./pages/CarPayment/CarPayment";
import ConfirmationPayment from "./pages/ConfirmationPayment/ConfirmationPayment";
import Login from "./pages/Login/Login";
import Health_Insurance from "./pages/Health_Insurance/Health_Insurance";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Confirmation from "./pages/ConfirmationPayment/components/Confirmation/Confirmation";
import ConfimationPaper from "./pages/ConfirmationPayment/ConfimationPaper";
import Quote from "./pages/Quote/Quote";
// import ConfirmationStep2 from './pages/ConfirmationPayment/components/Confirmation/ConfirmationStep2';
// import ContactUs from './Reilverse_Assets/pages/ContactUs/ContactUs';

function App() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="App">
            <Header />
            <div className={"w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip"}>
                {/* <div className={'w-full h-[900px] absolute top-0 left-0 bg-gradient-to-b from-[#c3e45e] to-transparent -z-0'}></div>
                <img data-aos="zoom-in" className={'object-contain w-auto h-[750px] absolute -top-9 left-0 z-0'}
                     src={diamond} alt={'Railverse logo vector'}/>
                <img data-aos="zoom-in" className={'object-contain w-auto h-[400px] absolute top-32 right-0 -z-10'}
                     src={vector1} alt={'Railverse logo vector'}/>
                <img data-aos="zoom-in" className={'object-contain w-auto h-[400px] absolute top-10 right-0 -z-20'}
                     src={vector2} alt={'Railverse logo vector'}/>
                <img data-aos="zoom-in" className={'object-contain w-auto h-[400px] absolute -top-10 -right-32 -z-30'}
                     src={vector3} alt={'Railverse logo vector'}/> */}

                {/* <img
                    data-aos="zoom-in"
                    className={"object-contain w-full absolute top-24 -right-0 -z-30"}
                    src={vector4}
                    alt={"Railverse logo vector"}
                /> */}

                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about"} element={<AboutUs />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/car_brand"} element={<CarBrand />} />
                    <Route path={"/driver_info"} element={<Driver_info />} />
                    <Route path={"/car_payment"} element={<CarPayment />} />
                    <Route path={"/contact"} element={<ContactUs />} />
                    <Route path={"/Quote"} element={<Quote />} />
                    <Route path={"/confirmation_payment"} element={<ConfirmationPayment />} />
                    <Route path={"/confirmation"} element={<Confirmation />} />
                    <Route path={"/confirmation-paper"} element={<ConfimationPaper />} />
                    <Route path={"/health_insurance"} element={<Health_Insurance />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
