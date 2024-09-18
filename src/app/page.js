import Image from "next/image";
import React from "react";
import Banner from "@/components/Homepage/Banner";
export default function Home() {
  return (
    <div>
      <main className="h-screen bg-white">
        <Banner/>
      </main>
    </div>
  );
}
