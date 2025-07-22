import React from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";

export function AppFeatures() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}


const data = [
  {
    category: "Speed",
    title: "Find your dream home faster with our lightning-quick search engine.",
    src: "https://images.unsplash.com/photo-1578991132108-16c5296b63dc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Trust",
    title: "Verified listings ensure you only see genuine properties.",
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Smart",
    title: "AI-powered recommendations tailored just for you.",
    src: "https://images.unsplash.com/photo-1716637644831-e046c73be197?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category: "Easy",
    title: "Simple, intuitive interface for hassle-free browsing.",
    src: "https://images.unsplash.com/photo-1531980181392-25eeff141ae7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Support",
    title: "Friendly experts ready to assist you 24/7.",
    src: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Secure",
    title: "Your data and transactions are protected with top-tier security.",
    src: "https://images.unsplash.com/photo-1635602739175-bab409a6e94c?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];