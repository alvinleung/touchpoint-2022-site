import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { TalkItem, TalkList } from "../components/TalkList";
import TalkInformation from "../data/talks";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Touchpoint 2022</title>
        <meta name="description" content="Touchpoint 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <h1 className="mt-4 ml-8 text-small uppercase mb-64">Some title</h1> */}
        <TalkList>
          {TalkInformation.map(
            ({ time, graduation, role, name, title }, index) => (
              <TalkItem
                time={time}
                graduation={graduation}
                role={role}
                key={index}
              >
                {`${name} “${title}”`}
              </TalkItem>
            )
          )}
        </TalkList>
      </main>
    </div>
  );
};

export default Home;
