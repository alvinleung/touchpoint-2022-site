import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { LandingEffect } from "../components/LandingEffect/LandingEffect";

import { Curtains } from "react-curtains";
import LandingHero from "../components/LandingHero/LandingHero";
import Nav from "../components/Nav/Nav";
import InfoBar from "../components/InfoBar/InfoBar";

const Home: NextPage = () => {
  const randomTextList = React.useMemo(() => {
    const textList = [];
    for (let i = 0; i < 100; i++) {
      textList[i] = "test";
    }
    return textList;
  }, []);

  let deviceRatio = 1;
  if (typeof window !== "undefined") {
    deviceRatio = window.devicePixelRatio;
  }

  return (
    <div>
      <Head>
        <title>Touchpoint 2022</title>
        <meta name="description" content="Touchpoint 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Curtains pixelRatio={deviceRatio}>
        <Nav />
        <InfoBar>
          TALKS @ SFU SRYE (02/23/22) from 9:00AM — 1:00PM / 10285 University
          Dr, Surrey, BC
        </InfoBar>
        <main>
          <LandingHero />
        </main>
      </Curtains>
    </div>
  );
};

export default Home;
