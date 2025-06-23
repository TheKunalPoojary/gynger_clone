"use client";
import Blueprint from "@/components/blueprint";
import Cta from "@/components/cta";
import Features from "@/components/features";
import Herosection from "@/components/herosection";
import LogoShowcase from "@/components/logoShowcase";
import Product from "@/components/product";
import Solution from "@/components/solution";
import { useEffect, useState } from "react";
import { getMainRes } from "@/helper";

export default function Home() {

  const [main, setMain] = useState({});

  useEffect(() => {
      const fetchHeader = async () => {
        const headerRes = await getMainRes();
        setMain(headerRes);
      };
      fetchHeader();
    }, []);

    console.log(main)

  return (
    <main className="w-full">
      <Herosection />
      <LogoShowcase />
      <Blueprint />
      <Product />
      <Solution />
      <Features />
      <Cta />
    </main>
  );
}
