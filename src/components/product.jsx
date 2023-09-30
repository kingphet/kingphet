// import React from 'react'
import { dataproduct } from "../data/dataProducts";
import frame62 from "../image/frame62.png";
import frame63 from "../image/frame63.png";
import frame64 from "../image/frame64.png";
import frame57 from "../image/frame57.png";
import frame59 from "../image/frame59.png";
import frame60 from "../image/frame60.png";
export default function Product() {
  console.log(dataproduct);
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-3/6 flex items-center justify-between bg-indigo-950 py-10 px-20">
          <div className="text-slate-50 mr-10">
            <h1 className="text-5xl">LAILAOLEBSHOP</h1>
            <h1 className="text-3xl">Shop electronic devices</h1>
            <h1 className="text-3xl">@Spesicl Gift</h1>
          </div>
          <div className="w-4/12 flex relative flex-wrap">
            <div
              className="w-52 h-52 bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${frame62})` }}
            >
              <img src={frame57} alt="" className="w-32 h-32" />
            </div>
            <div
              className="w-52 h-52 bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${frame63})` }}
            >
              <img src={frame59} alt="" className="w-32 h-32" />
            </div>
            <div
              className="w-52 h-52 bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${frame64})` }}
            >
              <img src={frame60} alt="" className="w-32 h-32" />
            </div>
          </div>
        </div>
        <div className="px-52 py-10 ">
          <div className="w-full flex flex-wrap justify-center">
            {dataproduct.map((items) => (
              <div
                className="w-5/12 h-96 rounded-lg flex items-center justify-center mr-2 mt-16 hover:border-slate-800"
                key={items.id}
                style={{ backgroundImage: `url(${items.background})` }}
              >
                <div className="flex">
                  <img
                    src={items.icon}
                    alt=""
                    className="w-20 h-20 mt-64 mr-2"
                  />
                  <img src={items.img} alt="" className="w-44" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
