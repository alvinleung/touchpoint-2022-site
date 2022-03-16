import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { LandingEffect } from "../components/LandingEffect/LandingEffect";

import { Curtains } from "react-curtains";
import LandingHero from "../components/LandingHero/LandingHero";
import { Nav } from "../components/Nav/Nav";
import InfoBar from "../components/InfoBar/InfoBar";
import Section from "../components/Layout/Section";
import BigText from "../components/Layout/BigText";
import ContentGroupLabel from "../components/Layout/ContentGroupLabel";
import ContentGroup from "../components/Layout/ContentGroup";
import Button from "../components/Button/Button";
import ExternalLink from "../components/ExternalLink/ExternalLink";
import { motion } from "framer-motion";
import { useIsPageLoaded } from "../components/PageWrapper/PageWrapper";

const Home: NextPage = () => {
  let deviceRatio = 1;
  if (typeof window !== "undefined") {
    deviceRatio = window.devicePixelRatio;
  }

  const companies = {
    "All Purpose": "https://www.allpurpose.io/",
    "Engine Digital": "https://enginedigital.com/",
    Invoke: "https://invokedigital.co/",
    "Green Stone": "https://www.greenstone.co/",
    // Handsome: "https://handsome.is/",
    Dossier: "https://www.dossiercreative.com/",
    Rivaltech: "https://www.rivaltech.com/",
    SAP: "https://www.sap.com/",
    "Telus Digital": "https://www.telus.com/en/digital",
  };

  const isLoaded = useIsPageLoaded();

  return (
    <>
      <Head>
        <title>Touchpoint 2022</title>
        <meta name="description" content="Touchpoint 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InfoBar>
        TALKS @ SFU SRYE (04/02/22) from 10:00AM — 4:00PM / 10285 University Dr,
        Surrey, BC
      </InfoBar>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          y: isLoaded ? 0 : 20,
          transition: { duration: 0.5 },
        }}
      >
        <Section id="Conference" noStyling>
          <LandingHero />
        </Section>

        <Section>
          <BigText>
            <ExternalLink href="https://www.sfu.ca/idc/">
              2020 Site
            </ExternalLink>
          </BigText>
        </Section>
      </motion.main>
    </>
  );
};

export default Home;
