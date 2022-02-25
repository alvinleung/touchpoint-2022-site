import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { EffectOverlay } from "../components/EffectOverlay";
import { LandingEffect } from "../components/LandingEffect/LandingEffect";

import { Curtains } from "react-curtains";

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
        <main>
          <LandingEffect></LandingEffect>
          {randomTextList.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </main>
      </Curtains>
    </div>
  );
};

export default Home;
