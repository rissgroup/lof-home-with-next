import React from 'react';
import Link from "next/link";
import Image from "next/image";
import twit from "../../public/assets/Icons/Twitter.svg";
import telegram from "../../public/assets/Icons/Telegram.svg";
import instagram from "../../public/assets/Icons/instagram.svg";
import reddit from "../../public/assets/Icons/reddit.svg";
import discord from "../../public/assets/Icons/discord.svg";
import heart from "../../public/assets/Icons/Herat.svg";

export default function Footer() {
  return (
    <>
    
    <div className="txt-botm">
          <div className="flex flex-row">
            <div className="basis-1/4 flex gap-3 pl-5">
              <a href="" className="">
                <Image src={twit}
                width={14}
                height={14}
                alt=""  />
              </a>
              <a href="" className="">
                <Image src={telegram} alt="" width={14}
                height={14}
                 />
              </a>
              <a href="" className="">
                <Image src={instagram} alt="" width={14}
                height={14} />
              </a>
              <a href="" className="">
                <Image src={reddit} alt="" width={14}
                height={14} />
              </a>
              <a href="" className="">
                <Image src={discord} alt="" width={14}
                height={14} />
              </a>
              <a href="" className="">
                <Image src={heart} alt="" width={14}
                height={14} />
              </a>
            </div>
            <div className="basis-2/4  ">
              <ul className=" gap-6 flex justify-center text-white text-xs font-medium hind " >
                <li >
                  <Link href="/termandConditions">
                    <a>Term and Condition</a>
                  </Link>
                </li>
                <li >
                  <Link href="/privacy">
                    <a>Privacy</a>
                  </Link>
                </li>
                <li >
                  <Link href="/riskpolicy">
                    <a>Risk Policy</a>
                  </Link>
                </li>
                <li >
                  <Link href="/">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="basis-1/4"></div>
          </div>
        </div>
    </>
  )
}
