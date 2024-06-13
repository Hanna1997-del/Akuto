import Image from "next/image";
import Navbar from "./components/Main/Navbar";
import Hero from "./components/Main/Hero";
import Footer from "./components/Main/Footer";
import Way from "./components/Main/Way";
import BG from "./components/Main/BG";

export default function Home() {
  return (
   <main className="w-screen relative h-screen overflow-x-hidden ">
   <Navbar/>
   <Hero/>
   <Way/>
   {/* <BG/> */}
   <Footer/>
   </main>
  );
}
