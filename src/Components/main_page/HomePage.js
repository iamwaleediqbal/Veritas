import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../css/nicepage.css";
import "../../css/Home.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";


const HomePage = () => {
  return (
    <div className="leading-normal tracking-normal text-gray-900" style={{"fontFamily": "'Source Sans Pro', sans-serif"}}>
      <div className="h-screen pb-14 bg-right bg-cover" style={{"backgroundImage": 'url("images/bg.svg")'}}>
        <Header />

        <div className=" pb-28 pt-24 md:pt-48 px-6 flex-wrap mx-auto flex md:flex-row sm:flex-col items-center">
          
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-left md:text-left slide-in-bottom-h1">Veritas - An E-Publishing Solution</h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-left md:text-left slide-in-bottom-subtitle">Veritas, revamps the e-book industry by bringing readers, writers and publishers on the same platform. Our aim is three-fold: enhance user’s reading experience, allow writers to self-publish, and expand the publishers’ distribution network to include a larger audience.
          <br/><br/>
          Bookworms, be on the lookout! For Veritas Android and iOS application is coming soon with all your favorite titles!
        </p>
          
            
          </div>
          
          <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
            <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src={"images/devices.png"}/>
          </div>      
        </div>     
      </div>


      <Footer />
    </div>
  );
};
export default HomePage;
