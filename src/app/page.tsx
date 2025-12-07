import { Button } from "@/components/ui/button";
// import Image from "next/image";
import CircularGallery from "./../components/CircularGallery";

export default function Home() {
  const items = [
    { image: "/Alex.jpg", text: "Alexandroupoli" },
    { image: "/Athens.jpg", text: "Athens" },
    { image: "/Thess.jpg", text: "Thessaloniki" },
    { image: "/Giannena.jpg", text: "Ioannena" },
    { image: "/Hrakleio.jpg", text: "Hrakleio" },
    { image: "/Volos.jpg", text: "Volos" },
  ];
  return (
    <>
      <div className="max-h-screen w-full flex flex-col items-center justify-center px-6 py-10 gap-14 mt-20">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
            Make your vote for the{" "}
            <span className="text-primary tracking-wide">Revelry</span> of your
            Town
          </h1>
          <p className="mt-6 md:text-lg text-secondary/70">
            You can have 4 votes per month.Every city has a 5 places for
            shoutout the rotation changes each month.
          </p>
          <p className=" md:text-lg text-secondary/70">
            Your vote makes places make the cut.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-lg">
              Play your votes
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none hover:text-primary"
            >
              City Ladders
            </Button>
          </div>
        </div>
        {/* <div className="flex gap-4 px-6 py-10 max-w-full">
        {items.map((image) => (
          <Image
            className="rounded-2xl"
            key={image.src}
            src={image.src}
            alt="dontknow"
            width={500}
            height={500}
          />
        ))}
      </div> */}
      </div>
      <div style={{ height: "500px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#f2f5fc"
          borderRadius={0.05}
          scrollEase={0.02}
          items={items}
        />
      </div>
    </>
  );
}
