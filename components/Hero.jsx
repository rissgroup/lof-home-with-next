import React from 'react'
import Image from 'next/image';
import mainimage from "../public/assets/Bachi-2.png"

export default function Hero() {
  return (
    <> 
     {/* <div class="concept concept-three">
    <div class="word text-white">
      <div class="hover">
        <div></div>
        <div></div>
        <h1>L</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>O</h1>
      </div>
      <div class="hover"> 
        <div></div>
        <div></div>
        <h1>N</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>E</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>L</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>Y</h1>
      </div>
    </div>
  </div> */}

    <div className="bg-dark hero ">

              
<div className="container-fluid ">
  <div className=" flex flex-row text-white pt-28  ">
    <div className="basis-4/12 pt-32 ">
      <h1 className="text-[5.7rem] font-black pop main-heading">LONELY</h1>
      <h6 className='text-4xl font-black pop main-heading2'>FANS</h6>
    </div>
    <div className="basis-4/12 justify-center flex">
    <Image
        src={mainimage}
        alt="Picture of the author"
        className=''
        layout=''
    
      
      
      />
        {/* <img src={mainimage} alt="Picture of the author" /> */}
    </div>
    <div className="basis-4/12 pt-28 pl-16">
      <h5 className='text-[2.5rem] monofont'>
        A revolutionary <br />
        <span className='pink-color'>fan platform</span>
      </h5>
      <p className='text-base font-semibold my-3 '>
        Sell any type of content. Easy to start!
       
      </p>
      <p className='leading-7 text-sm'> Completely free of judgement. No surprise account <br /> closings
        or changes in allowed content. Payments <br /> easily and in
        time.</p>
    </div>
  </div>
</div>
</div>
    
    </>
  )
}
