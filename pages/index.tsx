import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
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

const Home: NextPage = () => {
  let deviceRatio = 1;
  if (typeof window !== "undefined") {
    deviceRatio = window.devicePixelRatio;
  }

  const companies = {
    "All Purpose": "https://www.allpurpose.io/",
    "Engine Digital": "https://enginedigital.com/",
    Invoke: "https://invokedigital.co/",
    Greenstone: "https://www.greenstone.co/",
    Dossier: "https://www.dossiercreative.com/",
    Rivaltech: "https://www.rivaltech.com/",
    SAP: "https://www.sap.com/",
    "Telus Digital": "https://www.telus.com/en/digital",
  };

  return (
    <div>
      <Head>
        <title>Touchpoint 2022</title>
        <meta name="description" content="Touchpoint 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav>
        <InfoBar>
          TALKS @ SFU SRYE (04/02/22) / 10285 University Dr, Surrey, BC
        </InfoBar>
        <main>
          <Section id="Conference" noStyling>
            <LandingHero />
          </Section>
          <Section id="About">
            <ContentGroup>
              <ContentGroupLabel>About</ContentGroupLabel>
              <BigText>
                Hosted by SFU and the School of Interactive Arts and Technology,
                Touchpoint is an annual design conference for Vancouver’s
                creative community.
              </BigText>
            </ContentGroup>
            <ContentGroup>
              <ContentGroupLabel>Contact</ContentGroupLabel>
              <BigText>
                <a href="mailto:info@touchpointsfu.ca">info@touchpointsfu.ca</a>
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
          <Section id="Interview">
            <ContentGroup mediumPadding>
              <ContentGroupLabel>Interviews With</ContentGroupLabel>
              <div className="text-small w-3/4 uppercase mt-2">
                {Object.keys(companies).map((company) => (
                  // <span className="inline-block border border-black px-2 py-1 mx-1 my-1 hover:invert hover:border-white bg-white ">
                  <ExternalLink href={companies[company]} border>
                    {company}
                  </ExternalLink>
                  // </span>
                ))}
              </div>
            </ContentGroup>
            <ContentGroup noPadding>
              <ContentGroupLabel>
                Applications{" "}
                {/* <span className="ml-14 font-sans">01/01/22 — 01/02/22</span> */}
              </ContentGroupLabel>
              <BigText>
                SIAT students and alumni are invited to apply to interview with
                one of eight design agencies and product companies at
                Touchpoint. Interviews will be held remotely between April 4-8,
                2022.
              </BigText>
              <div className="my-[.75em]">
                <Button
                  href="https://forms.gle/3214i8LRmPCpeMRbA"
                  huge
                  target="_blank"
                >
                  Apply Here
                </Button>
              </div>
              <BigText>
                Applications close on Tuesday, March 15 at 5:00PM.
              </BigText>
            </ContentGroup>
          </Section>
          <Section>
            <BigText>
              <ExternalLink href="https://www.sfu.ca/idc/">
                2020 Site
              </ExternalLink>
            </BigText>
          </Section>
        </main>
      </Nav>
    </div>
  );
};

export default Home;
