import Image from "next/image";
import bgImage from "@/images/scan.webp";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function VideoBannerSection() {
  return (
    <section
      className="relative isolate overflow-hidden
                 py-12                /* modest vertical padding */
                 min-h-[35vh]"        /* compact height, ~1/3 of viewport */
    >
      {/* Background image */}
      <Image
        src={bgImage}
        alt="Demo video background"
        fill
        priority
        className="object-cover object-center w-full h-full"
      />

      {/* optional dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Play button */}
      <button
        aria-label="Play demo video"
        className="relative z-10 mx-auto flex h-[100px] w-[100px] items-center justify-center
                   rounded-full bg-[#567DF4] text-white
                   transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/60"
      >
        <PlayIcon className="h-12 w-12" />
      </button>
    </section>
  );
}
