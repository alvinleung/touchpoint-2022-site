import React from "react";
import { LandingEffect } from "../LandingEffect/LandingEffect";
import InfoBlock from "./InfoBlock";

type Props = {};

const LandingHero = (props: Props) => {
  return (
    <LandingEffect>
      <img src="wordmark.svg" className="mx-document-side my-document-top" />
      <InfoBlock>{"01/01/2020"}</InfoBlock>
    </LandingEffect>
  );
};

export default LandingHero;
