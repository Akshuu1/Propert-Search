"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinity-moving-cards";

export function AppUserTestimonials() {
  return (
    <div
      className="h-[40rem] mt-25 sm:mt-0 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="px-8 mb-10">
        <h4
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-extrabold text-black dark:text-white">
          What Our Homeowners Are Saying
        </h4>

        <p
          className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From first-time buyers to growing families, our clients have found more than just a house — they’ve found a place to call home. Hear their stories and see how we made their dream spaces a reality.
        </p>
      </div>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "As a first-time homebuyer, I had no clue where to start. Every platform felt confusing and overwhelming — until I landed here. The listings were beautifully presented, the filters actually worked, and the support team walked me through the tiniest doubts. Within a few weeks, I found a cozy 2BHK that checked all my boxes. I’m now sipping coffee in my new balcony and couldn’t be happier.",
    name: "Priya Mehta",

  },
  {
    quote:
      "Honestly, I thought buying a house remotely would be a nightmare. But this platform made it feel like a breeze. From virtual walkthroughs to scheduled video calls with agents, everything was done with such clarity and professionalism. They even helped me understand local regulations I had no idea about. I ended up buying a duplex without ever setting foot in the city until move-in day — and it was perfect.",
    name: "Ayaan Khan",

  },
  {
    quote: "I was relocating for work and had very little time to house-hunt in person. What blew me away was how intuitive and personalized everything felt. I got listing suggestions tailored to my taste, the photos and neighborhood insights were super detailed, and the follow-up was on point. I closed the deal on a lovely townhouse in just under 3 weeks — and I’ve been recommending them to everyone since.",
    name: "Radhika Sharma",

  },
  {
    quote:
      "We’d been looking for a place that could fit our growing family, but everything we saw was either way out of budget or too far from schools. This site changed everything. The location filters, the market insights, even the blog posts on what to look for as a family were super helpful. We finally found a spacious home near great schools, and the whole journey felt empowering rather than stressful.",
    name: "Kunal Verma",

  },
  {
    quote:
      "Buying our forever home was a huge deal for me and my partner. We had dreams, Pinterest boards, and a long wishlist — and somehow, this platform made it all happen. The moment we saw the listing, we knew it was the one. The process from booking a visit to signing the final papers was so smooth, we almost couldn’t believe it. Now, we wake up every day in a place that feels truly ours.",
    name: "Tanya Roy",
  },
];