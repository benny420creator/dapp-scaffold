import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Swap by $OwlCat</title>
        <meta
          name="description"
          content="Solana Swap"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
