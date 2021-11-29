import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/navbar";
import MainBanner from "../components/organisms/main-banner";
import TransactionSteps from "../components/organisms/transaction-steps";
import FeatureGames from "../components/organisms/feature-game";
import Reached from "../components/organisms/reached";
import Story from "../components/organisms/story";
import Footer from "../components/organisms/footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionSteps />
      <FeatureGames />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
