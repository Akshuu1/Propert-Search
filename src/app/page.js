import { GridBackground } from "@/components/ui/grid-background";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { AppSearchBar } from "@/components/common/AppSearchBar";
import { AppFeatures } from "@/components/layout/AppFeatures";
import { AppBentoGrid } from "@/components/layout/AppBentoGrid";
import { AppUserTestimonials } from "@/components/layout/AppUserTestimonials";

export default function Home() {
  return (
    <div className="">
      <GridBackground>
        <p className="text-3xl font-extrabold sm:text-7xl flex items-center justify-center gap-2.5">
          Find Homes <ContainerTextFlip
            words={["better", "modern", "quicker"]}
          />
        </p>
        <p className='mt-3 sm:mt-8 text-sm sm:text-lg p-2 text-center text-zinc-500 dark:text-zinc-400'>
          With powerful filters, clean design, and real-time listings, we help you explore the best properties— <span className='dark:text-white text-black'>faster</span>, <span className='dark:text-white text-black'>smarter</span>, and with <span className='dark:text-white text-black'>zero noise</span>.</p>
        <AppSearchBar />
      </GridBackground>

      <div className='mb-25 sm:mb-10'>
        <p className="text-2xl font-extrabold sm:text-4xl mx-4 sm:mx-35 mt-25 sm:mt-15">
          Why Choose Us?
        </p>
        <AppFeatures />
      </div>

      <AppBentoGrid />

      <div>
        <AppUserTestimonials />
      </div>

    </div>
  );
}
