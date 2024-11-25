import Image from "next/image";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import About from "./components/about";



export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Body />
      <About />
      <Footer />
    </>
  );
}
