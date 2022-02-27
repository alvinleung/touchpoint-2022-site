import React from "react";
import { LandingEffect } from "../LandingEffect/LandingEffect";
import InfoBlock from "./InfoBlock";
import InfoBlockGroup from "./InfoBlockGroup";

type Props = {};

const LandingHero = (props: Props) => {
  const block =
    "bg-black text-white border-2 border-white px-fluid-medium py-fluid-small ";

  return (
    <LandingEffect>
      <div className="h-24"></div>
      <img src="wordmark.svg" className="mx-6 lg:mx-document-side" />
      <div className="relative flex-grow mx-6 -mt-[1.2%] lg:mx-document-side text-fluid-medium">
        <div className="absolute flex flex-col translate-x-[12.5%]">
          <div className={block + "mr-auto border-b-0 z-10 pb-0"}>
            {"01/01/2020"}
          </div>
          <div className={block + "mr-auto mt-[-2px] z-0"}>9:00AM — 3:00PM</div>
        </div>
        <div className="absolute flex flex-col right-0">
          <div className={block + "z-10"}>
            13450 102 Ave Unit 110, Surrey, BC
          </div>
          <div
            className={block + "mr-auto -translate-x-[40%] -translate-y-[.3em]"}
          >
            Annual IxD Conference
          </div>
        </div>
        <div className="absolute flex flex-row right-0 top-[3em]">
          <div className={block + "mr-4"}>SPEAKER TBA</div>
          <div className={block + "mr-auto"}>4/02/2022</div>
        </div>
      </div>

      {/* <InfoBlockGroup>
        <InfoBlock left={0} top={0}>
          {"01/01/2020"}
        </InfoBlock>
        <InfoBlock top={30}>9:00AM — 3:00PM</InfoBlock>
        <InfoBlock right={0} top={0}>
          13450 102 Ave Unit 110, Surrey, BC
        </InfoBlock>

        <InfoBlock right={25} top={10}>
          Annual IxD Conference
        </InfoBlock>

        <InfoBlockGroup bottom={5} right={0} row>
          <InfoBlock>SPEAKERS TBA</InfoBlock>
          <InfoBlock>4/02/2022</InfoBlock>
        </InfoBlockGroup>
      </InfoBlockGroup> */}
    </LandingEffect>
  );
};

export default LandingHero;
