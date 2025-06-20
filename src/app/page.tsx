import Blueprint from "@/components/blueprint";
import Herosection from "@/components/herosection";
import LogoShowcase from "@/components/logoShowcase";
import Solution from "@/components/solution";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Herosection />
      <LogoShowcase />
      <Blueprint />
      <Solution />
    </main>
  );
}
