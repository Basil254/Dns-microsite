"use client";
import React from "react";
import Image from "next/image";
import Test from "@assets/DNSForum.JPG";
import { expectedOutcomes } from "@data";
// import { Button } from "@material-tailwind/react";
import { Fade, Slide } from "react-awesome-reveal";

const ExpectedOutcomes = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse mx-2 lg:mx-16 justify-center gap-5 my-10">
      <div className="w-full lg:w-[50%] bg-red-400/30 flex justify-center items-center p-6 lg:rounded-full">
        <Image
          src={Test}
          className="lg:w-[500px] shadow-md rounded-md hover:rotate-3 hover:scale-105"
        />
      </div>
      <div className="lg:w-[50%]">
        <Slide triggerOnce direction="left">
          <h1 className="text-2xl lg:text-5xl font-bold mb-5 text-[#010101]">
            Expected Outcomes
          </h1>
        </Slide>

        <Fade cascade>
          <ul className="list-decimal pl-8 flex flex-col gap-5 text-justify">
            {expectedOutcomes.map(({ topic }, index) => (
              <li className="text-xl text-[#606163] mr-2" key={index}>
                {topic}
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default ExpectedOutcomes;
