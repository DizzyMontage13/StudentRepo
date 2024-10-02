"use client";
import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import style from "@/styles/home.module.scss";
import Plan from "../modules/Plan.js"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});






export default function Home() {

  const [days, setDays] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [plan, setPlan] = useState("A");

  useEffect(() => {
    const now = new Date();
    const startDate = new Date("2024-09-30");
  
    const timeDiffrence = now - startDate;
  
    let daysDiffrence = Math.floor(timeDiffrence / (1000 * 60 * 60 * 24 * 7));
  
    console.log(daysDiffrence);
    setDays(daysDiffrence);


    if(daysDiffrence == 0) {
      setWeeks(1);
    } else {
      setWeeks(daysDiffrence);
    }    


    if(daysDiffrence != 0 && daysDiffrence % 2  == 0) {
      setPlan("B");
    } else {
      setPlan("A");
    }
  }, []);


  return (
    <>
      <div className={style.main}>
        <div className={style.title} id="about">
          <div className={style.back}>
            <h3>EDUCATION PLAN</h3>
          </div>
          {/* <h2>EDUCATION PLAN</h2> */}
        </div>

        <Plan />

        <div className={style.timers}>
          <div className={style.title}>
              <div className={style.back}>
                <h3>TYDZIEN</h3>
              </div>
              <h2>{weeks}</h2>
          </div>

          <div className={style.title}>
              <div className={style.back}>
                <h3>PLAN</h3>
              </div>
              <h2>{plan}</h2>
          </div>
        </div>
      </div>


      
    </>
  );
}
