import React from "react";
import Pagesfooter from "../components/navs/Pagesfooter";

export default function termandConditions() {
  return (
    <>
      <section className="for-page-bg bg-fixed bg-no-repeat bg-cover bg-center h-screen">
        <div className="h-[10%]"></div>
        <div className=" h-[80%] overflow-hidden text-white px-[7%]">
          {/* ************** Heading div *************** */}
          <div className="py-5 text-center">
            <h1 className=" text-5xl monofont">
              General <span className="PinkColor"> Terms and Conditions</span>
            </h1>
            <h2>for Access and Use of Lonelyfans Website and Services</h2>
          </div>
          {/* ********************* Main data div ******************** */}
          <div className="   overflow-y-auto h-full  text-white"></div>
        </div>
        <div className="h-[10%]">
          <Pagesfooter />
        </div>
      </section>
    </>
  );
}
