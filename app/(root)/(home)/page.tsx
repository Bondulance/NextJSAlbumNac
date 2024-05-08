import Artist from "@/components/Artist";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import BouncyButton from "@/components/oneuse/BouncyButton";

export default function Home() {
  return (
    <div className="mt-8 w-full px-10 flex flex-col overflow-hidden">
      <h1 className="text-n-400 font-bold text-[3rem] justify-center flex max-sm:text-[1.5rem]">
        Listen. Explore. <span className="text-n-200">&nbsp;Rank. </span>
      </h1>
      <p className="mt-1 text-n-400 text-center">
        Come rank your favorite albums from your favorite artists and share them
        with a music loving community!<br className="max-sm:hidden"></br> All
        your favorite artists and albums in one place. Get ready to rank!
      </p>
      <div className="mt-14 z-10">
        <Hero />
        <div className="relative my-10 flex items-center justify-center animate-bounce">
          <BouncyButton />
        </div>
      </div>

      <div className="mt-5 relative">
        <Artist />
      </div>
    </div>
  );
}
