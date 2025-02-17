import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Navbar from "./Components/Navbar/Navbar";
import ContactForm from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
