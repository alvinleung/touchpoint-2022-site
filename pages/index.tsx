import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { LandingEffect } from "../components/LandingEffect/LandingEffect";

import { Curtains } from "react-curtains";
import LandingHero from "../components/LandingHero/LandingHero";
import Nav from "../components/Nav/Nav";
import InfoBar from "../components/InfoBar/InfoBar";
import Section from "../components/Layout/Section";
import BigText from "../components/Layout/BigText";
import ContentGroupLabel from "../components/Layout/ContentGroupLabel";
import ContentGroup from "../components/Layout/ContentGroup";
import Button from "../components/Button/Button";
import ExternalLink from "../components/ExternalLink/ExternalLink";

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
          <Section>
            <ContentGroup>
              <ContentGroupLabel>About</ContentGroupLabel>
              <BigText>
                Touchpoint Interaction Design Conference is a part of SFU and
                the School of Interactive Art and Technology for the Interaction
                Design Research Centre.
              </BigText>
            </ContentGroup>
            <ContentGroup>
              <ContentGroupLabel>Contact</ContentGroupLabel>
              <BigText>
                <a href="mailto:info@touchpoint.com">info@touchpoint.com</a>
              </BigText>
            </ContentGroup>
            <ContentGroup noPadding>
              <ContentGroupLabel>Location</ContentGroupLabel>
              <BigText>
                <div>SFU Surrey, SYRE Building 10285</div>
                <div>University Dr, Surrey, BC</div>
              </BigText>
            </ContentGroup>
          </Section>
          <Section>
            <ContentGroup smallPadding>
              <ContentGroupLabel>Interviews With</ContentGroupLabel>
              <div className="text-small">
                ARITZIA, AXIOM ZEN, DOSSIER, IAOMOTA, IBM, SAP, UBER
              </div>
            </ContentGroup>
            <ContentGroup noPadding>
              <ContentGroupLabel>
                Applications{" "}
                <span className="ml-14 font-sans">01/01/22 — 01/02/22</span>
              </ContentGroupLabel>
              <BigText>
                Companies will be conducting 25 minute interviews with SIAT
                students and alumni on Month Day as part of Touchpoint 2022.
              </BigText>
              <div className="my-12">
                <Button href="#" huge>
                  Apply Here
                </Button>
              </div>
              <BigText>
                Applications close on Sunday, January 27th at 11:59PM.
              </BigText>
            </ContentGroup>
          </Section>
          <Section>
            <BigText>
              <ExternalLink href="#">2020 Site</ExternalLink>
            </BigText>
          </Section>
        </main>
      </Curtains>
    </div>
  );
};

export default Home;
