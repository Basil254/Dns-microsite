"use client";
import React from "react";
import Image from "next/image";
import adc from "@assets/AfricaDataCentres.png";
import cak from "@assets/CAKlogo.png";
import kenet from "@assets/KENETLogo.png";
import huawei from "@assets/HuaweiLogo.png";
import lqd from "@assets/LIQUIDTECHNOLOGIES.png";
import paix from "@assets/PAIXLogo.jpeg";
import { Slide } from "react-awesome-reveal";
import styles from "../styles/globals.css";

const Sponsors = () => {
  return (
    <div>
      <div className="flex">
        <Slide triggerOnce direction="left">
          <h1 className="text-lg lg:text-4xl font-bold mb-2 text-[#010101]">
            2022 KENYA DNS SPONSORS
          </h1>
        </Slide>
      </div>
      <div className={`image-container ${styles.imageContainer}`}>
        <Image src={cak} alt="CAKlogo.png" width={200} height={200} />
        <Image src={huawei} alt="HuaweiLogo.png" width={120} height={100} />
        <Image
          src={lqd}
          alt="LIQUIDTECHNOLOGIES.png"
          width={200}
          height={100}
        />
        <Image src={kenet} alt="KENETLogo.png" width={220} height={100} />
        <Image src={adc} alt="Africa Data Centres" width={200} height={100} />
        <Image src={paix} alt="PAIXLogo.jpeg" width={200} height={100} />
      </div>
    </div>
  );
};

export default Sponsors;
