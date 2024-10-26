import { Carousel } from "@/components/carousel";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <div>
        <h2 className="px-5 mt-10">love you endlessly</h2>
        <Carousel />
      </div>
      <div>
        <h2 className="px-5 mt-10">love you endlessly</h2>
        <Carousel />
      </div>
      <div>
        <h2 className="px-5 mt-10">love you endlessly</h2>
        <Carousel />
      </div>
    </main>
  );
}
