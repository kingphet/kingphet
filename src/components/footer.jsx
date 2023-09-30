import React from "react";
import logo from "../image/logo.png";
export default function Footer() {
  return (
    <>
      <div className="w-full h-72 bg-violet-900 text-slate-200">
        <div className="w-full h-5/6 flex items-center justify-between px-20">
          <img src={logo} alt="" className="w-64" />
          <div className="flex mr-10">
            <div className="mr-20">
              <h1 className="text-3xl">Help</h1>
              <h1>How to log in</h1>
              <h1>How to play by credit card?</h1>
            </div>
            <div className="">
              <h1 className="text-3xl">Contect</h1>
              <h1>Phone: 020 96423903</h1>
              <h1>Email: Kingphet31@gmail.com</h1>
              <h1>Address: Parkthang Vilage</h1>
            </div>
          </div>
        </div>
        <div className="h-1/6 w-full bg-indigo-950 flex items-center justify-center">
          <p>Copyright @ Lailaolab ICT Solution 2023 All rights reserved</p>
        </div>
      </div>
    </>
  );
}
