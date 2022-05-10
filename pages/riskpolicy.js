import React from "react";
import Pagesfooter from "../components/navs/Pagesfooter";

export default function riskpolicy() {
  return (
    <>
      <section className="for-page-bg bg-fixed bg-no-repeat bg-cover bg-center h-screen">
        <div className="h-[10%]"></div>
        <div className=" h-[80%] overflow-hidden text-white px-[7%]">
          {/* ************** Heading div *************** */}
          <div>
            <h1 className="py-5 text-center text-5xl monofont">
              Responsible Risk{" "}
              <span className="pink-color"> Disclosure Policy</span>
            </h1>
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
