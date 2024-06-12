import Image from "next/image";
import Navbar from "./components/Main/Navbar";
import Hero from "./components/Main/Hero";
import Footer from "./components/Main/Footer";
import Way from "./components/Main/Way";

export default function Home() {
  return (
   <main className="w-screen relative h-screen overflow-x-hidden px-5">
   <Navbar/>
   <Hero/>
   <Way/>
   <Footer/>
   </main>
  );
}
