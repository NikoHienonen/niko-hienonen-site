import { Footer } from "components/common/Footer";
import { Header } from "components/common/Header";
import { Contact } from "components/Site/Contact";
import { Home } from "components/Site/Home";
import { Music } from "components/Site/Music";

export const Site = () => {
  return (
    <div className="flex items-center flex-col h-screen w-screen bg-desert text-white bg-top bg-cover overflow-scroll">
      <div className="flex flex-col gap-12 pb-24">
        <Header />
        <Home />
        <Music />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
