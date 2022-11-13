import React from "react";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";

export default function PlacesToStay() {
  return (
    <div>
      <h1>Places to Stay</h1>
      <section className="hero sm:px-[100px] px-4 sm:pt-10 pt-5 sm:pb-14 pb-8">
        <CardGrid size={16} />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}