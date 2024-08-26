
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import HeaderSecond from "./components/HeaderSecond";

export default function Home() {
  return (
    <>
     <main className="flex flex-col items-center justify-center w-full  sm:px-6 lg:px-8">
      <Navbar />
     
        <HeaderSecond />
        <MainLayout />
     
    
      </main>
      <Footer />
    </>
  );
}
