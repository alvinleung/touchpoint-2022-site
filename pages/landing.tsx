import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import StretchyType from "../components/StretchyType/StretchyType";

import MouseChecker from "../components/MouseChecker/MouseChecker";
import ClickableChecker from "../components/MouseChecker/ClickableChecker";

//@ts-ignore
import { Curtains } from "react-curtains";

const Landing: NextPage = () => {
  const intermissionIndex = 4;

  const pixelRatio = React.useMemo(() => {
    if (typeof window !== "undefined")
      return Math.min(1.5, window.devicePixelRatio);
    return 1;
  }, []);

  return (
    <div>
      <Head>
        <title>Touchpoint 2022</title>
        <meta name="description" content="Touchpoint 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Curtains pixelRatio={pixelRatio}>
        <MouseChecker> */}
      <main className="overflow-hidden h-screen w-screen">
        <StretchyType>
          Touchpoint 2022: "TAGLINE HERE" is now accepting applications for our
          annual{" "}
          <a href="#" className="h-[.4vh]">
            interviews
          </a>
          . speaker list and conference schedule will be announced on a later
          date. Thank you.
        </StretchyType>
      </main>
      {/* </MouseChecker>
      </Curtains> */}
    </div>
  );
};

export default Landing;
