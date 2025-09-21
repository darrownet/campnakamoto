"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isKaraoke = pathname?.startsWith("/karaoke");
  const isCyberhornets = pathname?.startsWith("/cyberhornets");
  const isHoneybadgers = pathname?.startsWith("/honeybadgers");

  if (isKaraoke || isCyberhornets || isHoneybadgers) {
    // No global header/footer/background on karaoke pages
    return <main className="min-h-screen w-screen p-0 m-0">{children}</main>;
  }

  return (
    <>
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
