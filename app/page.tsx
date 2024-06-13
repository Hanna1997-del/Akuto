import Image from "next/image";
import Navbar from "./components/Main/Navbar";
import Hero from "./components/Main/Hero";

import Way from "./components/Main/Way";
import BG from "./components/Main/BG";
import MailBtn from "./components/Main/MailBtn";
import Footer from "./components/Main/Footer";

export default function Home() {
  return (
   <main className="w-screen relative h-screen overflow-x-hidden ">
   <Navbar/>
   <Hero/>
   <Way/>
   
   <MailBtn/>
   
   </main>
  );
}
