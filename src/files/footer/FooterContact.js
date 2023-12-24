import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";


export default function FooterContact() {
  return (
    <>
      <div className="w-full ">
        <div className=" w-[95%] m-auto lg:flex justify-between items-center bg-slate-100 rounded-xl">
          <div>
            <p className="text-lg py-2">We're Always Here To Help</p>
            <p className=" text-sm py-1">
              Reach out to us through any of these support channels
            </p>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-end lg:items-center lg:gap-7 lg:mr-12 lg:text-center flex flex-col justify-start items-start gap-7 ">
            <div className="flex items-center justify-center gap-1 my-3 cursor-pointer hover:text-gray-400">
              <div className="rounded-[50%] p-2 shadow-md border-l">
                <IoIosInformationCircleOutline size={25} />
              </div>
              <div>
                <p className="text-sm">Help Center</p>
                <p className=" font-bold text-sm py-1">Help.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 my-3 cursor-pointer hover:text-gray-400">
              <div className="rounded-[50%] p-2 shadow-md border-l">
                <CiMail size={25} />
              </div>
              <div>
                <p className="text-sm">Email Support</p>
                <p className=" font-bold text-sm py-1">mail@demo.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 my-3 cursor-pointer hover:text-gray-400">
              <div className="rounded-[50%] p-2 shadow-md border-l">
                <FiPhone size={25} />
              </div>
              <div>
                <p className="text-sm">Help Center</p>
                <p className=" font-bold text-sm py-1">Help.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
