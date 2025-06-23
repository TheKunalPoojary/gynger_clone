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
  type MainType = {
    page_component?: {
      hero_section?: boolean;
      scroller?: boolean;
      blueprint?: boolean;
      features_section?: boolean;
      product?: boolean;
      solution?: boolean;
      cta?: boolean;
    }[];
  };

  const [main, setMain] = useState<MainType>({});

  useEffect(() => {
    const fetchHeader = async () => {
      const headerRes = await getMainRes();
      setMain(headerRes);
    };
    fetchHeader();
  }, []);

// console.log(main)

  const hero = main?.page_component?.find((a) => a.hero_section).hero_section;
  const scoller = main?.page_component?.find((a) => a.scroller);
  // console.log(scoller)
  const blueprint = main?.page_component?.find((a) => a.blueprint).blueprint;
  console.log(blueprint)
  const features = main?.page_component?.find((a) => a.features_section);
  // console.log(features)
  const product = main?.page_component?.find((a) => a.product);
  // console.log(product)
  const solution = main?.page_component?.find((a) => a.solution);
  // console.log(solution)
  const cta = main?.page_component?.find((a) => a.cta);
  // console.log(cta)


  return (
    <main className="w-full">
      <Herosection data={hero} />
      <LogoShowcase data={scoller} />
      <Blueprint data={blueprint} />
      <Product data={product} />
      <Solution data={solution} />
      <Features data={features} />
      <Cta data={cta} />
    </main>
  );
}
