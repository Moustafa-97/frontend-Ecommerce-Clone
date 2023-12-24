import React from "react";

export default function BodyFirst(props) {
  return (
    <>
      <div className="w-[95%] lg:flex items-center justify-center m-auto mb-14 mt-7 gap-2">
        {/* more reason to shop */}
        <div className=" h-[500px] flex flex-col m-auto bg-slate-200 lg:w-1/3 rounded-xl p-2">
          <span className="text-start">More reason to shop</span>
          <div className="flex w-full m-auto mt-3 gap-1 ">
            <img src={props.shop1} className="w-1/2" alt="" />
            <img src={props.shop2} className="w-1/2" alt="" />
          </div>
          <div className="flex w-full m-auto mt-0 gap-1">
            <img src={props.shop3} className="w-1/2" alt="" />
            <img src={props.shop4} className="w-1/2" alt="" />
          </div>
        </div>
        {/* MEGA SALE*/}
        <div className=" h-[500px] flex flex-col m-auto bg-yellow-100 lg:w-1/3 rounded-xl p-2">
          <span className="text-start">Mega deals of the day</span>
          <div className="flex w-full h-[45%] m-auto gap-1">
            <div className="w-1/2 h-full flex flex-col m-auto cursor-pointer bg-slate-200 rounded-xl">
              <img src={props.mega1} className="w-full h-[80%] " alt="" />
              <span className="text-center m-auto">Up to 50% off</span>
            </div>
            <div className="w-1/2 h-full flex flex-col m-auto cursor-pointer bg-slate-200 rounded-xl">
              <img src={props.mega2} className="w-full h-[80%] " alt="" />
              <span className="text-center m-auto">Up to 50% off</span>
            </div>
          </div>
          <div className="flex w-full h-[45%] m-auto gap-1">
            <div className="w-1/2 h-full flex flex-col m-auto cursor-pointer bg-slate-200 rounded-xl">
              <img src={props.mega3} className="w-full h-[80%] \" alt="" />
              <span className="text-center m-auto">Up to 50% off</span>
            </div>
            <div className="w-1/2 h-full flex flex-col m-auto cursor-pointer bg-slate-200 rounded-xl">
              <img src={props.mega4} className="w-full h-[80%]" alt="" />
              <span className="text-center m-auto">Up to 50% off</span>
            </div>
          </div>
        </div>
        {/* in focus */}
        <div className=" h-[500px] flex flex-col m-auto bg-slate-200 lg:w-1/3 rounded-xl p-2">
          <span className="text-start">In focus</span>
          <div className="flex w-full m-auto mt-3 gap-1">
            <img src={props.focus1} className="w-full" alt="" />
          </div>
          <div className="flex w-full m-auto mt-0 gap-1">
            <img src={props.focus2} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
