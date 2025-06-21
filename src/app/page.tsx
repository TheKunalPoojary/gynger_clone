import Blueprint from "@/components/blueprint";
import Cta from "@/components/cta";
import Herosection from "@/components/herosection";
import LogoShowcase from "@/components/logoShowcase";
import Product from "@/components/product";
import Solution from "@/components/solution";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Herosection />
      <LogoShowcase />
      <Blueprint />
      <Product />
      <Solution />
      <Cta />
    </main>
  );
}
